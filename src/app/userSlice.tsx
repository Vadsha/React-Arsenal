import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "Vaddshah",
  email: "vaddshah@gmail.com"
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (user: UserState) => {
    await new Promise((res) => setTimeout(res, 1000));
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  //regular actions
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    }
  },
  // Put asynchronous actions here
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    });
  }
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
