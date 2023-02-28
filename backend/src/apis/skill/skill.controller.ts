import {selectAllSkills, selectSkillbySkillId} from "../../utils/models/Skill";
import {Status} from "../../utils/interfaces/Status";
import { Request, Response } from 'express'

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

export async function getSkillbySkillIdController (request: Request, response: Response): Promise<Response<Status>> {
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


