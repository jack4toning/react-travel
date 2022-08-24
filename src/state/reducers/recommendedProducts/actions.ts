import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
export const START_FETCH = 'start_fetch';
export const FINISH_FETCH = 'finish_fetch';
export const FAIL_TO_FETCH = 'fail_to_fetch';
export const STOP_FETCH = 'stop_fetch';
export type FetchProductListActionType =
  | StartFetchActionType
  | FinishFetchActionType
  | FailToFetchActionType
  | StopFetchActionType;

interface StartFetchActionType {
  type: typeof START_FETCH;
}
interface FinishFetchActionType {
  type: typeof FINISH_FETCH;
  payload: any[];
}
interface FailToFetchActionType {
  type: typeof FAIL_TO_FETCH;
  payload: string;
}
interface StopFetchActionType {
  type: typeof STOP_FETCH;
}

export const fetchRCProductListActionCreator =
  (): ThunkAction<void, RootState, unknown, FetchProductListActionType> =>
  async (dispatch) => {
    try {
      dispatch(startFetchActionCreator());
      const { data: productList } = await axios.get(
        'http://123.56.149.216:8080/api/productCollections'
      );
      dispatch(finishFetchActionCreator(productList));
    } catch (e: any) {
      dispatch(failToFetchActionCreator(e.message));
    }
    dispatch(stopFetchActionCreator());
  };

export const startFetchActionCreator = (): StartFetchActionType => ({
  type: START_FETCH,
});
export const finishFetchActionCreator = (
  productList: any[]
): FinishFetchActionType => ({
  type: FINISH_FETCH,
  payload: productList,
});
export const failToFetchActionCreator = (
  errMsg: string
): FailToFetchActionType => ({
  type: FAIL_TO_FETCH,
  payload: errMsg,
});
export const stopFetchActionCreator = (): StopFetchActionType => ({
  type: STOP_FETCH,
});
