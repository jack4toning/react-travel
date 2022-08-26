import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/language';
import recommendedProductsReducer from './slices/recommendedProducts';
import productReducer from './slices/product';
// import { actionLog } from './middlewares/actionLog';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    recommendedProducts: recommendedProductsReducer,
    product: productReducer,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
