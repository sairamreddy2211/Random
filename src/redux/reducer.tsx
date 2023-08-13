import {createSlice} from '@reduxjs/toolkit';

const loaderAction = createSlice({
  name: 'accountActions',
  initialState: {
    loading: null,
  },
  reducers: {
    loaderActionReducer: (state: any, action: {payload: any}) => {
      state.loading = action.payload;
    },
  },
});

export const {loaderActionReducer} = loaderAction.actions;

export const loaderReducer = loaderAction.reducer;
