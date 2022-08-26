import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';
import { DatabaseFilled } from '@ant-design/icons';

export interface productState {
  productDetails: any;
  isLoading: boolean;
  error: string;
}

const initialState: productState = {
  productDetails: {},
  isLoading: false,
  error: '',
};

const getProductDetails = createAsyncThunk(
  'product/getProductDetail',
  async (productId: string, thunkAPI) => {
    const { data: productDetails } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${productId}`
    );

    return productDetails;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startFetch(state) {
      state.isLoading = true;
    },
    finishFetch(state, action) {
      state.productDetails = action.payload;
    },
    failToFetch(state, action) {
      state.error = action.payload;
    },
    stopFetch(state) {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getProductDetails.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductDetails.fulfilled.type]: (state, action) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { startFetch, finishFetch, failToFetch, stopFetch } =
  productSlice.actions;
type FetchproductDetailsActionType =
  | ReturnType<typeof startFetch>
  | ReturnType<typeof finishFetch>
  | ReturnType<typeof failToFetch>
  | ReturnType<typeof stopFetch>;

// export const fetchProductDetailsActionCreator =
//   (
//     productId: string | undefined
//   ): ThunkAction<void, RootState, unknown, FetchproductDetailsActionType> =>
//   async (dispatch) => {
//     try {
//       dispatch(startFetch());
//       const { data: productDetails } = await axios.get(
//         `http://123.56.149.216:8080/api/touristRoutes/${productId}`
//       );
//       dispatch(finishFetch(productDetails));
//     } catch (e: any) {
//       dispatch(failToFetch(e.message));
//     }
//     dispatch(stopFetch());
//   };
export default productSlice.reducer;
