import {NextFunction, Request, Response} from "express";
import {
    Profile,
    PartialProfile,
    selectPartialProfileByProfileId,
    selectPartialProfileByProfileEmail,
    selectPartialProfileByProfileFullName,
    selectPartialProfileByProfileName,
    updateProfile,
    selectWholeProfileByProfileId, selectAllIsMakerProfiles, selectProfileBySkillId
} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called and user is logged in
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */

export async function putProfileController (request: Request, response: Response): Promise<Response> {

    try {
        const { profileId } = request.params
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string

        if (profileId !== profileIdFromSession) {
            return response.json({status: 400, data: null, message: 'you are not allowed to preform this task!'})
        }

        console.log('this works')
        const {
            profileAboutMe,
            profileEmail,
            profileFullName,
            profileImageUrl,
            profileIsMaker,
            profileName,
            profilePricing} = request.body

        const performUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(partialProfile.profileId as string) as Profile
            const newProfile:Profile = {...previousProfile, ...partialProfile }
            await updateProfile(newProfile)
            return response.json ({ status: 200, data: null, message: 'Profile successfully updated'})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message })
            }

        return profileId === profileIdFromSession
            ? await performUpdate({profileId, profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing})
            :updateFailed('Update Failed')
        }
        catch (error:any){
        return response.json({status: 400, data: null, message: error.message})
        }
    }


/**
 * Express controller that returns a profile object with the provided primary key
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */

export async function getProfileByProfileIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { profileId } = request.params
        const postGresResponse = await selectPartialProfileByProfileId(profileId)
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error:any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

/**
 * Express controller that returns a profile object with the provided profileName
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */


export async function getProfileByProfileNameController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { profileName } = request.params
        const data = await selectPartialProfileByProfileName(profileName)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}


/**
 * Express controller that returns a profile object with the provided profileFullName
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */


export async function getProfileByProfileFullNameController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { profileFullName } = request.params
        const data = await selectPartialProfileByProfileFullName(profileFullName)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}


/**
 * Express controller that returns a profile object with the provided profileEmail
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */


export async function getProfileByProfileEmailController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { profileEmail } = request.params
        const data = await selectPartialProfileByProfileEmail(profileEmail)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getAllIsMakerProfilesController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllIsMakerProfiles()
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

/**
 * Express controller that returns a profile object by skillId through Maker_Skill table
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */

export async function getProfileBySkillIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { skillId } = request.params
        const postGresResponse = await selectProfileBySkillId(skillId)
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error:any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}
