import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profiles".
    initialState: {},
    reducers: {
        setProfile: (profiles, action) => {
        return action.payload
        }
    }
}
)

export const {setProfile} = profileSlice.actions




export default profileSlice.reducer