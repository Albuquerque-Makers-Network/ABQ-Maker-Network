import {Request, Response} from "express";
import {Profile, selectPartialProfileByProfileId, updateProfile} from "../../utils/models/Profile";


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
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
            return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task'})
        }

        const { profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing} = request.body
        const updatedValues = {profileAboutMe, profileEmail, profileFullName, profileImageUrl, profileIsMaker, profileName, profilePricing}
        const previousProfile: Profile = await selectPartialProfileByProfileId(profileId) as Profile

        const newProfile: Profile = { ...previousProfile, ...updatedValues }
        await updateProfile(newProfile)
        return response.json ({status: 200, data: null, message: 'Profile successfully updated'})
    } catch (error: any) {
        return response.json ({status: 400, data: null, message: error.message})
    }
}

