import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import {getAllIsPopularSkillsController, getAllSkillsController, getSkillbySkillIdController} from "./skill.controller";
import { Router } from "express";
import { check } from "express-validator";

export const skillsRouter: Router = Router()
skillsRouter.route('/')
    .get(getAllSkillsController)

skillsRouter.route('/:skillId')
    .get(asyncValidatorController([
    check('skillId', 'please provide a valid skillId').isUUID()
]), getSkillbySkillIdController)

skillsRouter.route('/SkillsIsPopular/Popular')
    .get(getAllIsPopularSkillsController)





