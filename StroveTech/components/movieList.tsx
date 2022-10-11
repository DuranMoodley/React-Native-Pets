import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export type Props = {
  navigation: any;
  dogImage: string;
  color: string;
  description: string;
  breed: string;
  dogName: string;
  dogId: any;
}

const MovieItem: React.FC<Props> = ({
  dogId,
  dogName,
  breed,
  description,
  color,
  dogImage,
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        padding: 5,
      }}>
      <Image
        style={styles.imageDogStyle}
        source={{
          uri: dogImage,
        }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            name: dogName,
            breed: breed,
            description: description,
            color: color,
            dogImage: dogImage,
            dogId: dogId
          })
        }>
        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 15 }}>
          <Text style={{ color: 'black', fontSize: 14 }}>{dogName}</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>{breed}</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'light-gray',
              marginTop: 5,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageDogStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default MovieItem;
