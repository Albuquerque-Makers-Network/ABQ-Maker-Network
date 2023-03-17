import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"
import {setAllProfiles} from "./profiles.js";

const skillSlice = createSlice({
    name: "skills",
    initialState: {},
    reducers: {
        setAllSkills: (skills, action) => {
            return action.payload
        },
        setAllPopularSkills: (skills, action) =>{
            return action.payload
        },
        setProfileSkills: (skills, action) =>{
            return action.payload
        }
    }
})

export const {setAllSkills, setAllPopularSkills, setProfileSkills} = skillSlice.actions

export const fetchAllSkills = () => {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/skills')
        if (Array.isArray(data)===false){
            throw new Error('data is malformed')
        }
        const skillsDictionary = data.reduce(
            (accumulator, currentValue) => {
                accumulator[currentValue.skillId] = currentValue
                return accumulator
            },
        {}
        )
        console.log('these are all skills', skillsDictionary)
        dispatch (setAllSkills(skillsDictionary))
    }
}

export const fetchAllPopularSkills = () => {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/skills/SkillsIsPopular/Popular')
        if (Array.isArray(data)===false){
            throw new Error('data is malformed')
        }
        const popularSkillsDictionary = data.reduce(
            (accumulator, currentValue) => {
                accumulator[currentValue.skillId] = currentValue
                return accumulator
            },
            {}
        )
        console.log('these are popular', popularSkillsDictionary)
        dispatch (setAllPopularSkills(popularSkillsDictionary))
    }
}

export const fetchSkillByProfileId = (profileId) => {
    return async function (dispatch) {
        const { data } = await httpConfig(`/apis/skills/profileId/${profileId}`)
        if ( Array.isArray(data)===false) {
            throw new Error ('data is malformed')
        }
        const skills = data.reduce(
              (accumulator, currentValue) => {
                  accumulator[currentValue.skillId] = currentValue
                  return accumulator
              },
              {}
            )
            dispatch(setProfileSkills(skills))
        }
    }



export default skillSlice.reducer
