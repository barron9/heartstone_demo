import React from 'react';

import {View, Text, ActivityIndicator} from 'react-native';

export default Loading = () => {
  return (
    <View style={loadingStyle}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={fontStyle}>Data is downloading, Please wait...</Text>
    </View>
  );
};
const loadingStyle = {
  alignItems: 'center',
  flex: 1,
  marginTop: 50,
};

const fontStyle = {
  fontSize: 10,
};
