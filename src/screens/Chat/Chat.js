import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './Chat.styled';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../components/CustomInput/CustomInput';
import {initChatSocket, sendMessage} from '../../utils/chatService';

const Chat = () => {
  const style = styles({belongToAuthor: false});
  const [username, setUserName] = useState('Famil');
  const [newMessage, setNewMessage] = useState('');
  const [isUserNameExist, setIsUsernameExist] = useState(false);
  const [allMessages, setAllMessage] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const value = await AsyncStorage.getItem('username');
      if (value) {
        setIsUsernameExist(true);
        setUserName(value);
      }
    }
    fetchData();
  }, []);

  async function buttonPressed() {
    await AsyncStorage.setItem('username', username);
    setUserName('Famil');
    setIsUsernameExist(true);
    global.ws = initChatSocket({username: 'Famil'});
  }

  return (
    <View style={style.container}>
      {isUserNameExist ? (
        <View style={style.chatRoomSubView}>
          <FlatList
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            onScrollBeginDrag={() => {
              Keyboard.dismiss();
            }}
            ref={flatListRef}
            contentContainerStyle={style.chatRoomFlatList}
            data={allMessages}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View>
                  <ChatBubble
                    key={index}
                    message={item}
                    belongToAuthor={item.includes(username)}
                    user={item.author}
                  />
                </View>
              );
            }}
          />
          <SafeAreaView style={style.chatRoomSafeAreaView}>
            <CustomInput
              value={newMessage}
              onChangeText={setNewMessage}
              buttonPressed={() => {
                setNewMessage('');
                sendMessage({ws: global.ws, message: newMessage});

                global.ws.onmessage = e => {
                  setAllMessage([...allMessages, e.data]);
                };
              }}
            />
          </SafeAreaView>
        </View>
      ) : (
        <View style={style.buttonTextView}>
          <TextInput
            placeholder="Username"
            style={style.textInput}
            value={username}
            onChangeText={setUserName}
          />
          <View style={style.buttonView}>
            <Button
              title="Start Chatting"
              color={'white'}
              onPress={buttonPressed}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const ChatBubble = ({message, belongToAuthor = false, user}) => {
  const style = styles({
    belongToAuthor,
  });

  return (
    <View style={style.chatRoomBubbleMainView}>
      <View
        style={{
          ...style.chatRoomBubbleSubView,
          ...style.chatRoomBubbleAlignStyle,
        }}>
        {!belongToAuthor && (
          <View style={style.chatRoomBubbleFirstNameView}>
            {<Text style={style.chatRoomBubbleFirstName}>{user}</Text>}
          </View>
        )}
        <View
          style={{
            ...style.chatRoomBubbleMessageView,
            ...style.chatRoomBubbleStyle,
            ...style.chatRoomBubbleAlignStyle,
          }}>
          <Text
            style={{
              ...style.chatRoomBubbleMessageText,
              ...style.chatRoomBubbleTextStyle,
            }}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Chat;
