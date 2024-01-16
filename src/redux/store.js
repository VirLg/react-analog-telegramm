import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsApi } from './rtkQuery/cars';
import { carReduser } from './slice';

export const store = configureStore({
  reducer: combineReducers({
    [carsApi.reducerPath]: carsApi.reducer,
    carState: carReduser,
  }),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});
