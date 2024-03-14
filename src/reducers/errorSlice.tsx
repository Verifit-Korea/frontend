import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface errorState {
  nameError: string;
  emailError: string;
  passwordError: string;
}

const initialState: errorState = {
  nameError: '',
  emailError: '',
  passwordError: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setNameError: (state, action: PayloadAction<string>) => {
      state.nameError = action.payload;
    },
    setEmailError: (state, action: PayloadAction<string>) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action: PayloadAction<string>) => {
      state.passwordError = action.payload;
    },
  },
});

export const {setNameError, setEmailError, setPasswordError} =
  errorSlice.actions;
  
export default errorSlice.reducer;
