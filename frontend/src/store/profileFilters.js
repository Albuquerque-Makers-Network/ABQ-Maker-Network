import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig.js";


const profileFiltersSlice = createSlice ({
    name: "profileFilters",
    initialState : {},
    reducers: {
        getProfileBySkill: (profileFilters, action) => {
            profiles[action.payload.skillId] = action.payload.data
        }
    }
})

export const {getProfileBySkill} = profileFiltersSlice.actions

export const fetchProfileBySkillId = (skillId) => async (dispatch, getState) => {
    const state = getState()

    const profiles = state.profiles

    if (profiles[skillId] === undefined) {
        const {data} = await httpConfig(`/apis/profile/skills/${skillId}`)
        dispatch(getProfileBySkill({skillId, data}))
    }
}

export default profileFiltersSlice.reducer

