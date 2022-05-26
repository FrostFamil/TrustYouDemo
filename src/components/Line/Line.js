import React from 'react';
import {View} from 'react-native';

const Line = props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderColor: 'black',
        borderTopWidth: 1,
        ...props.style,
      }}
    />
  );
};

export default Line;
