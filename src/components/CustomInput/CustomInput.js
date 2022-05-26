import React, {useEffect, useState} from 'react';
import {View, Keyboard, LayoutAnimation, Button, TextInput} from 'react-native';
import getStyles from './CustomInput.styled';

let animationEnd = true;

const CustomInput = ({buttonPressed, ...props}) => {
  const style = getStyles();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardShow = event => {
    const {
      endCoordinates: {height},
    } = event;

    setKeyboardHeight(height);
    avoidKeyboard(event);
  };

  const onKeyboardHide = event => {
    setKeyboardHeight(0);
    avoidKeyboard(event);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    Keyboard.addListener('keyboardWillHide', onKeyboardHide);
  }, []);

  return (
    <View>
      <View style={style.messageContainer}>
        <View style={style.messageInputContainer}>
          <TextInput
            style={style.message}
            shape="rounded"
            placeholder="Add your message"
            multiline={true}
            editable={true}
            {...props}
          />
          <Button title="Send" onPress={buttonPressed} />
        </View>
      </View>
      <View style={{height: keyboardHeight}} />
    </View>
  );
};

const avoidKeyboard = event => {
  const {duration: dur, easing} = event;

  const duration = Math.max(dur, 10);

  let type = LayoutAnimation.Types[easing] || 'keyboard';

  if (duration && easing && animationEnd) {
    animationEnd = false;
    LayoutAnimation.configureNext(
      {update: {duration, type}, duration},
      () => {
        animationEnd = true;
      },
      () => {
        animationEnd = true;
      },
    );
  }
};

export default CustomInput;
