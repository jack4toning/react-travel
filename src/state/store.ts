import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';
// import { actionLog } from './middlewares/actionLog';

// export const store = createStore(reducers, applyMiddleware(thunk, actionLog));
export const store = createStore(reducers, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
