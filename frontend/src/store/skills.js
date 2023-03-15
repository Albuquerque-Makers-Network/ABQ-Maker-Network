import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"

const skillSlice = createSlice({
    name: "skills",
    initialState: {},
    reducers: {
        setAllSkills: (skills, action) => {
            return action.payload
        }
    }
})

export const {setAllSkills} = skillSlice.actions

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
        dispatch (setAllSkills(skillsDictionary))
    }
}

export default skillSlice.reducer
