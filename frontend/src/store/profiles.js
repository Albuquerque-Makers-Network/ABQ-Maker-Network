import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"

const profileSlice = createSlice({
    name: "profiles",
    initialState: {},
    reducers: {
        setProfile: (profiles, action) => {
            profiles[action.payload.profileId] = action.payload.data
        },
        setAllProfiles: (profiles, action) => {
            return action.payload
        }
    }
}
)

export const {setProfile, setAllProfiles} = profileSlice.actions

export const fetchProfileByProfileId = (profileId) => async (dispatch, getState)=> {
    const state = getState()

    const profiles = state.profiles
    console.log(profiles[profileId])
    if(profiles[profileId] === undefined){
        const{data} = await httpConfig(`/apis/profile/${profileId}`)
        dispatch(setProfile({profileId, data}))
    }
}


export const fetchAllProfiles = () => {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/profile/')
        console.log(data)
        if (Array.isArray(data)=== false){
            throw new Error('data is malformed')
    }
        const profileDictionary = data.reduce(
            (accumulator, currentValue) => {
            accumulator[currentValue.profileId] = currentValue
            return accumulator
        },
        {}
        )
        console.log(profileDictionary)
        dispatch (setAllProfiles(profileDictionary))
    }
}

export default profileSlice.reducer