import {
  deleteMakerSkillController,
  getMakerSkillByProfileIdController,
  getMakerSkillBySkillIdController,
  postMakerSkillController
} from "./maker-skill.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const makerSkillRoute: Router = Router()
makerSkillRoute.route('/')
    .post ( isLoggedIn, postMakerSkillController )

makerSkillRoute.route('/makerskillid/:makerSkillId')
  .get( asyncValidatorController ( [check ( 'makerSkillId', 'Please provide a valid skill ID').isUUID() ])
  , getMakerSkillBySkillIdController )

makerSkillRoute.route('/makerprofileid/:makerSkillMakerProfileId')
  .get ( asyncValidatorController ( [ check ( 'makerSkillMakerProfileId', 'Please provide a valid maker skill profile ID').isUUID() ]), getMakerSkillByProfileIdController )

makerSkillRoute.route( '/:makerSkillMakerProfileId/:makerSkillId')
  .delete ( isLoggedIn, asyncValidatorController( [ check ( 'makerSkillMakerProfileId', 'Please provide a valid maker skill profile ID').isUUID() ])
    , deleteMakerSkillController )