import {
    selectAllIsPopularSkills,
    selectAllSkills,
    selectSkillByProfileId,
    selectSkillbySkillId
} from "../../utils/models/Skill";
import {Status} from "../../utils/interfaces/Status";
import { Request, Response } from 'express'
import {selectProfileBySkillId} from "../../utils/models/Profile";

export async function getAllSkillsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllSkills()
        // return the response
        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getAllIsPopularSkillsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllIsPopularSkills()
        // return the response
        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getSkillBySkillIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { skillId } = request.params
        const data = await selectSkillbySkillId(skillId)
        return response.json({status: 200, message: null, data})
    }   catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function getSkillByProfileIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { profileId } = request.params
        const postGresResponse = await selectSkillByProfileId(profileId)
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error:any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}


