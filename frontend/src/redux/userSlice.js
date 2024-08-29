import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (params) => {
  const { data } = await axios.get('/api/users', { params });
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { list: [], totalPages: 1, status: null },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.list = payload.users;
      state.totalPages = payload.totalPages;
      state.status = 'success';
    },
    [fetchUsers.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default userSlice.reducer;
