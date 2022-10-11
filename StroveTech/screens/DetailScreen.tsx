import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { updateDog } from '../state/Actions';
import { useSelector, useDispatch } from 'react-redux';

const windowWidth = Dimensions.get('window').width;

export type Props = {
  route: {
    params: {
      name: string,
      breed: string,
      color: string,
      description: string,
      dogImage: string,
      dogId: any
    }
  };
  navigation: {
    goBack: Function;
  }
}

const DetailScreen: React.FC<Props> = ({
  navigation,
  route
}) => {
  const { name, breed, color, description, dogImage, dogId } = route.params;
  const [dogName, setName] = useState(name);
  const [dogBreed, setBreed] = useState(breed);
  const [dogColor, setColor] = useState(color);
  const [dogDescription, setDescription] = useState(description);
  const dispatch = useDispatch();

  const getItem = () => {
    dispatch(
      updateDog({
        key: dogId,
        name: dogName,
        breed: dogBreed,
        color: dogColor,
        imageUrl: dogImage,
        description: dogDescription,
      }),
    );

    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollViewStyle}>
        <Image
          style={styles.dogImageStyle}
          source={{
            uri: 'https://raw.githubusercontent.com/FormidableLabs/dogs/main/src/milo.jpg',
          }}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => setName(text)}
          value={dogName}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => setBreed(text)}
          value={dogBreed}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => setColor(text)}
          value={dogColor}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.inputStyle}
          onChangeText={text => setDescription(text)}
          value={dogDescription}
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            getItem();
          }}>
          <Text style={{ alignSelf: 'center', color: 'black' }}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    color: 'black',
    borderColor: 'grey',
    width: 300,
    borderWidth: 1,
    fontSize: 15,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  scrollViewStyle: {
    flex: 1,
  },
  dogImageStyle: {
    width: windowWidth,
    height: 300,
  },
});

export default DetailScreen;
