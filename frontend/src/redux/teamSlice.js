import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTeam = createAsyncThunk('team/createTeam', async (teamData) => {
  const { data } = await axios.post('/api/team', teamData);
  return data;
});

const teamSlice = createSlice({
  name: 'team',
  initialState: { team: null, status: null },
  extraReducers: {
    [createTeam.pending]: (state) => {
      state.status = 'loading';
    },
    [createTeam.fulfilled]: (state, { payload }) => {
      state.team = payload;
      state.status = 'success';
    },
    [createTeam.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default teamSlice.reducer;
