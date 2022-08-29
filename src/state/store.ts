import { configureStore } from '@reduxjs/toolkit';

import {
  languageReducer,
  recommendedProductsReducer,
  productReducer,
  filteredProductsReducer,
  userReducer,
} from './slices';
// import { actionLog } from './middlewares/actionLog';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    recommendedProducts: recommendedProductsReducer,
    product: productReducer,
    filteredProducts: filteredProductsReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
