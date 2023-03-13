import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"

const profileSlice = createSlice({
    name: "profiles",
    initialState: {},
    reducers: {
        setProfile: (profiles, action) => {
        return action.payload
        }
    }
}
)

export const {setProfile} = profileSlice.actions

export function fetchProfileByProfileId = (profileId) => async (dispatch, getState){

}


export default profileSlice.reducer