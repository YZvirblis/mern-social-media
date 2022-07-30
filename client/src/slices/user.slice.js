import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      username: "",
      email: "",
      password: "",
      profilePicture: "",
      coverPicture: "",
      followers: [],
      following: [],
      isAdmin: false,
      description: "",
      city: "",
      from: "",
      relationship: 0,
      id: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
      console.log("CLG FROM ACTION: ", action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
