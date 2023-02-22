import {sql} from "../database.utils";

export interface Profile {
    profileId: string|null
    profileAboutMe: string
    profileActivationToken: string|null
    profileEmail: string
    profileFullName: string
    profileHash: string
    profileImageUrl: string|null
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
    const {profileAboutMe, profileActivationToken, profileEmail, profileFullName, profileHash, profileImageUrl, profileIsMaker, profileName, profilePricing} = profile
    await sql `INSERT INTO profile(profile_id, profile_about_me, profile_activation_token, profile_email, profile_full_name, profile_hash, profile_image_url, profile_is_maker, profile_name, profile_pricing) VALUES (gen_random_uuid(), ${profileAboutMe}, ${profileActivationToken}, ${profileEmail}, ${profileFullName}, ${profileHash}, ${profileImageUrl}, ${profileIsMaker}, ${profileName}, ${profilePricing})`
    return 'Profile successfully created!'
}

export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
    const result = <Profile[]> await sql `SELECT profile_id, profile_about_me, profile_activation_token, profile_email, profile_full_name, profile_hash, profile_image_url, profile_is_maker, profile_name, profile_pricing FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    return result?.length === 1 ? result [0] : null
}

export async function selectProfileByProfileEmail (profileEmail: string): Promise <Profile|null> { sta
    const result = <Profile[]> await sql `SELECT profile_id, profile_about_me, profile_activation_token, profile_email, profile_full_name, profile_hash, profile_image_url, profile_is_maker, profile_name, profile_pricing FROM profile WHERE profile_email = ${profileEmail}`
    return result?.length === 1 ? result[0] : null
}


export async function updateProfile (profile: Profile): Promise<string> {
    console.log('profile in update profile function', profile)
    const {profileId, profileAboutMe, profileActivationToken, profileEmail, profileFullName, profileHash, profileImageUrl, profileIsMaker, profileName, profilePricing} = profile
    await sql `UPDATE profile SET profile_about_me = ${profileAboutMe}, profile_activation_token = ${profileActivationToken}, profile_email = ${profileEmail}, profile_full_name = ${profileFullName}, profile_hash = ${profileHash}, profile_image_url = ${profileImageUrl}, profile_is_maker = ${profileIsMaker}, profile_name = ${profileName}, profile_pricing = ${profilePricing} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}

