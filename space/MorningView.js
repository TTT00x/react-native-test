import React from 'react';
import { View, ScrollView, Text, Image, Dimensions} from 'react-native';

export default class MorningView extends React.Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
      <View>
        <Text>Good Morning!</Text>
        <ScrollView>
          <Text>Date</Text>
          <Image
            source={require('../assets/main.png' )}
            style={{
              height: imageHeight,
              width: imageWidth
            }}
          />
          <View style={{
            height: 300,
            backgroundColor: 'black'
          }}>

          </View>
        </ScrollView>
      </View>
    )
  }
}
