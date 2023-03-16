import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig.js";


const selectedUserSlice = createSlice ({
  name: "selectedUser",
    initialState : [],
  reducers: {
    getSelectedUserByProfileId: (selectedUsers, action) => {
      return action.payload
    }
  }
})

export const {getSelectedUserByProfileId} = selectedUserSlice.actions

export const fetchSelectedUser = (profileId) => async dispatch => {
  const {data} = await httpConfig.get(`/apis/profile/$profileId}`)
  dispatch(getSelectedUserByProfileId(data))
}

export default selectedUserSlice.reducer