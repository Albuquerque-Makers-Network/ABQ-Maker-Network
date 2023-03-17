// import {httpConfig} from "../ui/shared/utils/httpconfig.js";
//
// const makerSkillSlice = createSlice({
//   name: "makerSkills",
//   initialState:
// })
// export const fetchSkillsByMakerProfileId = (profileId) => async (dispatch, getState) => {
//   const state = getState()
//
//   const skills = state.makerSkills
//
//   if (skills[profileId] === undefined) {
//     const {data} = await httpConfig(`/apis/profile/skills/${profileId}`)
//     if (Array.isArray(data)=== false){
//       throw new Error('data is malformed')
//     }
//     const skillsDictionary = data.reduce(
//       (accumulator, currentValue) => {
//         accumulator[currentValue.skillId] = currentValue
//         return accumulator
//       },
//       {}
//     )
//     dispatch (sssssss(skillsDictionary))
//   }
// }
