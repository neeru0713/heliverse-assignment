import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import teamReducer from './teamSlice';

export default configureStore({
  reducer: {
    users: userReducer,
    team: teamReducer
  },
});
