import {Request, Response} from "express";
import {
  deleteMakerSkill,
  selectMakerSkillByProfileId,
  selectMakerSkillBySkillId,
  insertMakerSkill
} from "../../utils/models/MakerSkill";
import {Status} from "../../utils/interfaces/Status";


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */

export async function getMakerSkillBySkillIdController ( request: Request, response: Response ) : Promise <Response> {

  try {
    const { makerSkillId } = request.params
    const postGresResponse = await selectMakerSkillBySkillId ( makerSkillId )
    const data = postGresResponse ?? null
    const status: Status = { status: 200, data, message: null }
    return response.json(status)
  } catch (error:any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function getMakerSkillByProfileIdController ( request: Request, response: Response ) : Promise <Response> {

  try {
    const { makerSkillMakerProfileId } = request.params
    const postGresResponse = await selectMakerSkillByProfileId ( makerSkillMakerProfileId )
    const data = postGresResponse ?? null
    const status: Status = { status: 200, data, message: null}
    return response.json(status)
  } catch ( error:any ) {
    return ( response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function deleteMakerSkillController ( request: Request, response: Response ) : Promise <Response> {

  try {
    const { makerSkillMakerProfileId, makerSkillId } = request.params
    const postGresResponse = await deleteMakerSkill ({ makerSkillMakerProfileId, makerSkillId })
    const data = postGresResponse ?? null
    const status: Status = { status: 200, data, message:null }
    return response.json (status)
  } catch ( error: any ) {
    return ( response.json ({ status:400, data: null, message: error.message }))
  }
}

export async function postMakerSkillController ( request: Request, response: Response ) : Promise <Response> {

  try {
    const { makerSkillMakerProfileId, makerSkillId } = request.params
    const postGresResponse = await insertMakerSkill ( { makerSkillMakerProfileId, makerSkillId })
    const data = postGresResponse ?? null
    const status: Status = { status: 400, data, message: null }
    return response.json (status)
   } catch ( error: any ) {
    return ( response.json ( { status: 400, data: null, message: error.message }) )
  }
}
