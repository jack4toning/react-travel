import { combineReducers } from 'redux';
import { languageReducer } from './language/language';

export const reducers = combineReducers({
  language: languageReducer,
});
