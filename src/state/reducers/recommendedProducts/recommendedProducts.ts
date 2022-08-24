import {
  FetchProductListActionType,
  START_FETCH,
  FINISH_FETCH,
  FAIL_TO_FETCH,
  STOP_FETCH,
} from './actions';

export interface recommendedProductsState {
  productList: any[];
  isLoading: boolean;
  error: string;
}

const defaultState: recommendedProductsState = {
  productList: [],
  isLoading: false,
  error: '',
};

export const recommendedProductsReducer = (
  prevState = defaultState,
  action: FetchProductListActionType
) => {
  switch (action.type) {
    case START_FETCH:
      return { ...prevState, isLoading: true };
    case FINISH_FETCH:
      return { ...prevState, productList: action.payload };
    case FAIL_TO_FETCH:
      return { ...prevState, error: action.payload };
    case STOP_FETCH:
      return { ...prevState, isLoading: false };
    default:
      return prevState;
  }
};
