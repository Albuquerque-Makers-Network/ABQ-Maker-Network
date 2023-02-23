import {Request, Response} from "express";
import {Profile, selectPartialProfileByProfileId, updateProfile} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function putProfileController (request: Request, response: Response): Promise<Response> {

    try {
        const {profileId} = request.params
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string
            console.log(request.params)
        if (profileId !== profileIdFromSession) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task'})
        }

        const { profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing} = request.body
        const updatedValues = {profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing}
        const previousProfile: Profile = await selectPartialProfileByProfileId(profileId) as Profile

        const newProfile: Profile = { ...previousProfile, ...updatedValues }
        await updateProfile(newProfile)
        return response.json ({status: 200, data: null, message: 'Profile successfully updated'})
    }
        //
        // const updateFailed = (message: string): Response => {
        // return response.json({status: 400, data: null, message })
        // }
        //
        // return profileId === profileIdFromSession
        // ? await performUpdate ({profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing})

    catch (error: any) {
        return response.json ({status: 400, data: null, message: error.message})
    }
}

/**
 * Express controller that returns a profile object with the provided primary key or null, if no object was found, when the endpoint GET apis/status/ is called.
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the server.
 * @return A promise containing a status object with the requested information set to the data field
 */
export async function getProfileByProfileIdController (request: Request, response: Response): Promise<Response<Status>>{
    try {
        const { profileId} = request.params
        const postGresResponse = await selectPartialProfileByProfileId(profileId)
        const data = postGresResponse ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error:any){
        return (response.json({status: 400, data: null, message: error.message}))
    }
}