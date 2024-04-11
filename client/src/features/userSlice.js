import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserByEmail,
  getUserProfile,
  updateUserName,
} from "./thunks/userThunks";

import {
  handleFetchUserByEmailFullfilled,
  handleFetchUserByEmailRejected,
  handleFetchUserByEmailPending,
  handleGetUserProfileFullfilled,
  handleUpdateUserNameFullfilled,
  handleUpdateUserNamePending,
  handleUpdateUserNameRejected,
} from "./userReducersHelpers";

const initialState = {
  userInfo: {},
  statusMessage: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return { ...initialState };
    },
    handleStatusMessage: (state) => {
      state.statusMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.pending, handleFetchUserByEmailPending);
    builder.addCase(
      fetchUserByEmail.fulfilled,
      handleFetchUserByEmailFullfilled
    );
    builder.addCase(fetchUserByEmail.rejected, handleFetchUserByEmailRejected);

    builder.addCase(getUserProfile.fulfilled, handleGetUserProfileFullfilled);

    builder.addCase(updateUserName.pending, handleUpdateUserNamePending);

    builder.addCase(updateUserName.rejected, handleUpdateUserNameRejected);

    builder.addCase(updateUserName.fulfilled, handleUpdateUserNameFullfilled);
  },
});

export const { logout, handleStatusMessage } = userSlice.actions;

export default userSlice.reducer;
