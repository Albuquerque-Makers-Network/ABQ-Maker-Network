import { NextFunction, Request, Response } from "express"
import { IncomingHttpHeaders } from "http"
import { verify, VerifyErrors } from "jsonwebtoken"
import { Status } from "../interfaces/Status"
import { Profile } from "../models/Profile"

export function isLoggedIn (request: Request, response: Response, next: NextFunction): any {
    const status: Status = { status: 400, message: 'Please login', data: null }

    // @ts-ignore
    const sessionProfile = (request: Request): Profile | undefined => request.session?.profile ?? undefined

    // @ts-ignore
    const signature = (request: Request): string => request.session?.signature ?? 'no signature'

    const isSessionActive = (isProfileActive: Profile | undefined): boolean => (isProfileActive !== undefined)

    const getJwtTokenFromHeader = (headers: IncomingHttpHeaders ): string | undefined => {
        return headers.authorization
    }

    const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers)



    const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
        if (unverifiedJwtToken === undefined) {
            return false
        }
        const result: unknown = verify(
            unverifiedJwtToken,
            signature(request),
            { maxAge: '3hr'},
            (error: VerifyErrors | null): boolean => error == null
        ) as unknown

        return result as boolean
    }

    if (isJwtValid(unverifiedJwtToken) && isSessionActive(sessionProfile(request))) {
        return next()
    }

    isJwtValid(unverifiedJwtToken) && isSessionActive(sessionProfile(request)) ? next(): response.json(status)
}