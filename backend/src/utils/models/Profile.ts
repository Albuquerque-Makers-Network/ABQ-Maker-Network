import {sql} from "../database.utils";

export interface Profile{
    profileId: string|null
    profileAboutMe: string
    profileActivationToken: string
    profileEmail: string
    profileFullName: string
    profileHash: string
    profileImageURL: string|null
    profileIsMaker: string
    profileName: string
    profilePricing: string
}

/**
 * Function to insert profile object into postgres database
 * @param profile Profile object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertProfile (profile: Profile): Promise<string> {
    const {profileAboutMe, profileActivationToken, profileEmail, profileFullName, profileHash, profileImageURL, profileIsMaker, profileName, profilePricing} = profile
    await sql `INSERT INTO profile(profile_id, profile_about_me, profile_activation_token, profile_email, profile_full_name, profile_hash, profile_image_url, profile_is_maker, profile_name, profile_pricing) VALUES (gen_random_uuid(), ${profileAboutMe}, ${profileActivationToken}, ${profileEmail}, ${profileFullName}, ${profileHash}, ${profileImageURL}, ${profileIsMaker}, ${profileName}, ${profilePricing})`
    return 'Profile successfully created!'
}


