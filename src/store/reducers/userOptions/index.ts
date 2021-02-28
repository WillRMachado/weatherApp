import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userOptions = createSlice({
  name: 'userOptions',
  initialState: {
    language: 'pt',
  },
  reducers: {
    changeLanguage(state) {
      state.language === 'pt'
        ? (state.language = 'en')
        : (state.language = 'pt');
    },
  },
});

export const {changeLanguage} = userOptions.actions;
export default userOptions.reducer;
