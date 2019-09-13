import React from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import FlipCard from 'react-native-flip-card';

export default DetailViewModel = (item, data) => {
  console.log('started rendering');
  const cardsData = [];
  Object.keys(data).forEach(key => {
    if (data[key].length > 0) {
      // console.log(key, data[key].length);
      Object.keys(data[key]).forEach(key1 => {
        if (data[key][key1]['mechanics'] != null) {
          Object.keys(data[key][key1]['mechanics']).forEach(key2 => {
            if (data[key][key1]['mechanics'][key2].name == item) {
              cardsData.push(data[key][key1]);
              console.log(data[key][key1]);
            }
          });
        }
      });
    }
  });

  return (
    <View>
      <Text style={{fontSize: 10, color: '#ccc', margin: 9}}>
        cards with mechanics ""{item}"" listing.
      </Text>
      <FlatList
        style={{marginLeft: 10}}
        showsVerticalScrollIndicator={true}
        data={cardsData}
        renderItem={({item}) => (
          <FlipCard>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 150, height: 150, resizeMode: 'contain'}}
                source={{uri: item.img}}
              />
              <Text style={textStyle}>{item.text}</Text>
            </View>
            <View>
              <Text style={textStyle}>{JSON.stringify(item)}</Text>
            </View>
          </FlipCard>
        )}
      />
    </View>
  );
};
const textStyle = {
  margin: 2,
  color: 'black',
  fontSize: 11,
  fontFamily: 'courier',
};
