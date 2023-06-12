import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  checkStatus: 'Under construction',
});

export default categoriesSlice.reducer;
