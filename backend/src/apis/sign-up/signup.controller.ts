import {Response, Request} from "express";
import Mailgun from "mailgun.js";
import formData from 'form-data';
import Client from "mailgun.js/dist/lib/client";
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertProfile, Profile } from "../../utils/models/Profile";
import { Status } from "../../utils/interfaces/Status";

export async function signupProfileController (request: Request, response: Response): Promise<Response|undefined> {
    try {
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})

        const {
            profileEmail,
            profileAboutMe,
            profileFullName,
            profilePassword,
            profileImageUrl,
            profileIsMaker,
            profileName,
            profilePricing,
        } = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()

// make sure the 8080 is removed at end of bootcamp

        const basePath: string = `${request.protocol}://${request.hostname}:8080${request.originalUrl}/activation/${profileActivationToken}`
        const message = `<h2>Welcome to the ABQ Maker Network!</h2>
        <p>Please make sure you have verified your account. Check your email!</p>
        <p><a href="${basePath}">${basePath}</a></p>
        `
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'So close! Get started with the ABQ Maker Network by activating your account.',
            html: message
        }

        let profileIsMakerBoolean = false
        if (profileIsMaker === "true") {
            profileIsMakerBoolean = true
        }

        let profile: Profile;
        profile = {
            profileId: null,
            profileAboutMe: profileAboutMe ?? null,
            profileActivationToken,
            profileEmail,
            profileFullName,
            profileHash,
            profileImageUrl: profileImageUrl ?? null,
            profileIsMaker: profileIsMakerBoolean,
            profileName,
            profilePricing: profilePricing ?? null,
        };
        await insertProfile(profile)
        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email',
            data: null
        };

        return response.json(status)
    } catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }

        return response.json(status)
    }
}