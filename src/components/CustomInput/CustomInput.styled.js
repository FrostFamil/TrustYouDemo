import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = () => {
  return StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    messageInputContainer: {
      borderWidth: 1,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      borderRadius: 20,
      width: width - 40,
      alignItems: 'center',
      overflow: 'hidden',
    },
    message: {
      marginRight: -16,
      paddingHorizontal: 16,
      flex: 1,
      marginVertical: Platform.OS === 'ios' ? 6 : 0,
      alignSelf: 'stretch',
      borderWidth: 0,
      borderRadius: 20,
      textAlignVertical: 'center',
      lineHeight: 18,
      fontWeight: '500',
      overflow: 'hidden',
      color: '#5E697A',
    },
  });
};

export default styles;
