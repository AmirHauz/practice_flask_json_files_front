import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import workerReducer from '../features/WORKERS/workerSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    worker: workerReducer
  },
});
