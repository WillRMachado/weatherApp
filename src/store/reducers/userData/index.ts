import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface showModalType {
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: any;
}
const userData = createSlice({
  name: 'userData',
  initialState: {
    language: 'en',
    modal: {
      isVisible: false,
      title: '',
      description: '',
      buttonText: '',
      buttonAction: undefined,
    },
  },
  reducers: {
    changeLanguage(state) {
      state.language === 'pt'
        ? (state.language = 'en')
        : (state.language = 'pt');
    },
    showModal(state, action: PayloadAction<showModalType>) {
      state.modal.isVisible = true;
      state.modal.title = action.payload.title;
      state.modal.description = action.payload.description;
      state.modal.buttonText = action.payload.buttonText;
      state.modal.buttonAction = action.payload.buttonAction
        ? action.payload.buttonAction
        : undefined;
    },
    hideModal(state) {
      state.modal.isVisible = false;
    },
  },
});

export const {changeLanguage, showModal, hideModal} = userData.actions;
export default userData.reducer;
