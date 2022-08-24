import { combineReducers } from 'redux';
import { languageReducer } from './language';
import { recommendedProductsReducer } from './recommendedProducts';

export const reducers = combineReducers({
  language: languageReducer,
  recommendedProducts: recommendedProductsReducer,
});
