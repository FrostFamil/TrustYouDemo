import {StyleSheet} from 'react-native';

const styles = ({belongToAuthor}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    buttonTextView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      borderWidth: 1,
      width: 300,
      height: 40,
      borderRadius: 8,
    },
    buttonView: {
      borderWidth: 1,
      top: 20,
      borderRadius: 8,
      backgroundColor: 'indigo',
    },
    chatRoomSubView: {
      flex: 1,
    },
    chatRoomFlatList: {
      marginVertical: 16,
      padding: 16,
    },
    chatRoomSafeAreaView: {
      zIndex: 1000,
      marginHorizontal: 16,
      marginVertical: 12,
    },
    //Chat Room Bubble
    chatRoomBubbleMainView: {
      width: '100%',
      marginBottom: 16,
    },
    chatRoomBubbleSubView: {
      maxWidth: '80%',
    },
    chatRoomBubbleFirstName: {
      color: '#9FA4AC',
      fontSize: 12,
      fontWeight: '500',
    },
    chatRoomBubbleFirstNameView: {
      marginBottom: 6,
      marginLeft: 8,
    },
    chatRoomBubbleMessageView: {
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
    },
    chatRoomBubbleMessageText: {
      fontSize: 14,
      lineHeight: 25,
      fontWeight: '500',
    },
    chatRoomBubbleAlignStyle: {
      alignSelf: belongToAuthor ? 'flex-end' : 'flex-start',
    },
    chatRoomBubbleStyle: {
      backgroundColor: belongToAuthor ? '#5E697A' : 'rgba(94, 105, 122, 0.1)',
    },
    chatRoomBubbleTextStyle: {
      color: belongToAuthor ? '#fff' : '#5E697A',
    },
  });
};

export default styles;
