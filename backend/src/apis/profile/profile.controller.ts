import {Request, Response} from "express";
import {
    Profile,
    PartialProfile,
    selectPartialProfileByProfileId,
    updateProfile,
    selectWholeProfileByProfileId
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
    };


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
};