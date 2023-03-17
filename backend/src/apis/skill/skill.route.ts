import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import {
    getAllIsPopularSkillsController,
    getAllSkillsController,
    getSkillByProfileIdController,
    getSkillBySkillIdController
} from "./skill.controller";
import { Router } from "express";
import { check } from "express-validator";

export const skillsRouter: Router = Router()
skillsRouter.route('/')
    .get(getAllSkillsController)

skillsRouter.route('/:skillId')
    .get(asyncValidatorController([
    check('skillId', 'please provide a valid skillId').isUUID()
]), getSkillBySkillIdController)

skillsRouter.route('/SkillsIsPopular/Popular')
    .get(getAllIsPopularSkillsController)

skillsRouter.route('/:profileId')
  .get(asyncValidatorController([check
  ('profileId', 'please provide a valid profileId').isUUID()])
, getSkillByProfileIdController
  )




