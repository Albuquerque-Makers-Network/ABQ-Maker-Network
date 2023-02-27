import {Request, Response} from "express";
import { Status } from "../../utils/interfaces/Status";
import {Profile, selectPartialProfileByProfileId} from "../../utils/models/Profile";
import {deleteMakerSkill} from "../../utils/models/MakerSkill";

export async function postPortfolioController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {portfolioImageUrl} = request.body
        const profile: Profile = request.session.profile as Profile
        const portfolioProfileId: string = profile.profileId as string

        const porfolioImage: PortfolioImage = {
            portfolioId: null,
            portfolioProfileId,
            portfolioImageUrl
        }
        const result = await (MODEL
        FUNCTION
        HERE
    )
        (porfolioImage)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }
        return response.json(status)
    }
};


export async function getPortfolioImageByProfileIdController ( request: Request, response: Response ) : Promise <Response> {

    try {
        const { portfolioProfileId } = request.params
        const postGresResponse = await selectPortfolioByProfileId ( portfolioProfileId )
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null}
        return response.json(status)
    } catch ( error:any ) {
        return ( response.json({ status: 400, data: null, message: error.message }))
    }
};

export async function getPortfolioByPortfolioIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { portfolioId } = request.params
        const postGresResponse = await selectPortfolioByPorfolioId (portfolioId)
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error:any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
};

export async function deletePortfolioImageController ( request: Request, response: Response ) : Promise <Response> {

    try {
        const { makerSkillMakerProfileId, makerSkillId } = request.params
        const postGresResponse = await deleteMakerSkill ({ makerSkillMakerProfileId, makerSkillId })
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message:null }
        return response.json (status)
    } catch ( error: any ) {
        return ( response.json ({ status:400, data: null, message: error.message }))
    }
};