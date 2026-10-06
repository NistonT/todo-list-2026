import type { IUser } from "@/shared/model/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  data: IUser | null;
}

const initialState: IUserSlice = {
  data: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
    deleteUser(state) {
      state.data = null;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
