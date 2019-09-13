import React from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default ViewModel = (data, navigation) => {
  console.log('started rendering');
  const mechanicsData = [];
  Object.keys(data).forEach(key => {
    if (data[key].length > 0) {
      // console.log(key, data[key].length);
      Object.keys(data[key]).forEach(key1 => {
        if (data[key][key1]['mechanics'] != null) {
          Object.keys(data[key][key1]['mechanics']).forEach(key2 => {
            if (
              mechanicsData.indexOf(data[key][key1]['mechanics'][key2].name) < 0
            ) {
              mechanicsData.push(data[key][key1]['mechanics'][key2].name);
              console.log(data[key][key1]['mechanics'][key2].name);
            }
          });
        }
      });
    }
  });

  return (
    <View>
      <Text style={{fontSize: 10, color: '#ccc', margin: 9}}>
        filter cards with their mechanics property.
      </Text>
      <FlatList
        style={{marginLeft: 10}}
        showsVerticalScrollIndicator={true}
        data={mechanicsData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', {item,data})}>
            <Text
              style={{
                margin: 2,
                color: 'black',
                fontSize: 11,
                fontFamily: 'courier',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
