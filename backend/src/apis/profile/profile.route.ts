import {
    getAllProfilesController,
    getProfileByProfileEmailController,
    getProfileByProfileFullNameController,
    getProfileByProfileIdController,
    getProfileByProfileNameController,
    putProfileController
} from "./profile.controller";
import { Router } from 'express'
import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import { check, checkSchema} from 'express-validator';
import { profileValidator } from "./profile.validator";


export const profileRoute: Router = Router()
profileRoute.route('/')
    .post(putProfileController)
    .get (getAllProfilesController)

profileRoute.route('/:profileId')
    .get(asyncValidatorController([check('profileId', 'please provide a valid profileId').isUUID()])
    , getProfileByProfileIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)


profileRoute.route('/profileName/:profileName')
    .get(asyncValidatorController([check('profileName', 'please provide a valid profileName').isString()])
        , getProfileByProfileNameController
    )

profileRoute.route('/profileFullName/:profileFullName')
    .get(asyncValidatorController([check('profileFullName', 'please provide a valid profileFullName').isString()])
        , getProfileByProfileFullNameController
    )

profileRoute.route('/profileEmail/:profileEmail')
    .get(asyncValidatorController([check('profileEmail', 'please provide a valid profileEmail').isString()])
        , getProfileByProfileEmailController
    )