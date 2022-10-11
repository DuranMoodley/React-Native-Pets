import { GET_DOGS, UPDATE_DOG } from './Type';

interface Dog {
  key: string,
  name: string,
  breed: string,
  color: string,
  imageUrl: string,
  description: string
}

export const getDogs = async () => {
  return async function (dispatch) {
    const response = await fetch('https://dogs.formidable.dev/dogs');
    const dogs = await response.json();

    console.log('000', dogs);
    dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
};

export const updateDog = (dogItem: Dog) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  console.log(dogItem)
  dispatch({
    type: UPDATE_DOG,
    payload: dogItem,
  })
};
