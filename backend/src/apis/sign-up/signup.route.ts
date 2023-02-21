import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signupProfileController} from './signup.controller'
import {checkSchema, param} from "express-validator";
import {signupValidator} from "./signup.validator";
import { Router } from "express";
import {activationController} from "./activation.controller";

export const signupRoute: Router = Router()

signupRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    )

signupRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        activationController
    )

