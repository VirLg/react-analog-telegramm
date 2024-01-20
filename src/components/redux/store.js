import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatsApi } from './rtkQuery/rtkQuery';
import { chatReducer } from './slice';

export const store = configureStore({
  reducer: combineReducers({
    [chatsApi.reducerPath]: chatsApi.reducer,
    chatState: chatReducer,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    chatsApi.middleware,
  ],
});
