import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dogsReducer from './Reducer';
const rootReducer = combineReducers({
  dogsReducer,
});
export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));