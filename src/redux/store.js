import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatsApi } from './rtkQuery/rtkQuery';

export const store = configureStore({
  reducer: combineReducers({
    [chatsApi.reducerPath]: chatsApi.reducer,
    // carState: carReduser,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    chatsApi.middleware,
  ],
});
