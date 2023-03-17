import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
  deletePortfolioImageController,
  getPortfolioByPortfolioIdController,
  getPortfolioImageByProfileIdController,
  postPortfolioController
} from "./porfolio.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {portfolioValidator} from "./portfolio.validator";


export const portfolioRoute: Router = Router()
portfolioRoute.route ( '/' )

function deletePortfolioController() {

}

portfolioRoute.route ( '/portfolioProfileId/:profileId' )
  .get ( asyncValidatorController ( [ check ( 'profileId', 'Please provide a valid profile ID' ).isUUID () ])
    , getPortfolioImageByProfileIdController )
  .post ( isLoggedIn, asyncValidatorController ( [ check ( 'portfolioImageUrl', 'Please provide a valid Image URL' ).isURL () ])
    , postPortfolioController )

portfolioRoute.route ( '/:portfolioId' )
  .get ( asyncValidatorController ( [ check ( 'portfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
  , getPortfolioByPortfolioIdController )
  .delete ( isLoggedIn, asyncValidatorController ( [ check ( 'portfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
    , deletePortfolioImageController )