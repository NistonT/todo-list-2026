import type { IUser } from "@/shared/model/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  data: IUser | null;
  isAuth: boolean;
}

const initialState: IUserSlice = {
  data: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
      state.isAuth = true;
    },
    deleteUser(state) {
      state.data = null;
      state.isAuth = false;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
