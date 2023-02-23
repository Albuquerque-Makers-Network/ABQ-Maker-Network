import {getProfileByProfileIdController, putProfileController} from "./profile.controller";
import { Router } from 'express'
import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import { check, checkSchema} from "express-validator";
import { profileValidator } from "./profile.validator";


export const profileRoute: Router = Router()
profileRoute.route('/')
.post(putProfileController)



profileRoute.route('/:profileId')
    .get(asyncValidatorController([check('profileId', 'please provide a valid profileId').isUUID()])
    , getProfileByProfileIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
