import {putProfileController} from "./profile.controller";
import { Router } from 'express'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";


export const profileRoute: Router = Router()
profileRoute.route('/')
.post(putProfileController)


// profileRoute.route('/:profileId')
// .get (
//     asyncValidatorController({
//         check ('profileId', 'please provide a valid profileId')
//         .isUUID()
//     })
// ,
// )