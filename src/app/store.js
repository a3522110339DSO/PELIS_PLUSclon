// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import programReducer from '../features/program/programSlice';

export default configureStore({
  reducer: {
    program: programReducer,
  },
});