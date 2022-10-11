import { UPDATE_DOG, GET_DOGS } from './Type';

const initialState = {
  dogs: [],
  loading: true,
};

const updateDogItem = (dogItem: any, state: any) => {
  console.log(dogItem.key);
  return state.dogs.map((item: { key: any; }) =>
    item.key === dogItem.key
      ? {
        key: dogItem.key,
        name: dogItem.name,
        description: dogItem.description,
        breed: dogItem.breed,
        color: dogItem.color,
        imageUrl: dogItem.imageUrl,
      }
      : item,
  );
};

function dogsReducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, loading: false, dogs: action.payload };
    case UPDATE_DOG:
      return {
        ...state,
        loading: false,
        dogs: updateDogItem(action.payload, state),
      };
    default:
      return state;
  }
}
export default dogsReducer;
