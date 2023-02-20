import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signupProfileController} from './signup.controller'
import {checkSchema} from "express-validator";
import {signupValidator} from "./signup.validator";
import { Router } from "express";

export const signupRoute: Router = Router()

signupRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    )