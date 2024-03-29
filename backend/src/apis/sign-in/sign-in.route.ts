import { Router } from 'express'
import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import { signInValidator} from "./sign-in.validators";
import { signInController } from './sign-in.controller'
import { checkSchema } from "express-validator";

export const SignInRouter: Router = Router()

SignInRouter.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController)