import { createSlice } from "@reduxjs/toolkit";
interface IChoiceAuth {
  isAuth: boolean;
}

const initialState: IChoiceAuth = {
  isAuth: true,
};

const choiceAuthSlice = createSlice({
  name: "choiceAuthSlice",
  initialState,
  reducers: {
    auth(state) {
      state.isAuth = true;
    },
    reg(state) {
      state.isAuth = false;
    },
  },
});

export const { auth, reg } = choiceAuthSlice.actions;
export default choiceAuthSlice.reducer;
