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

portfolioRoute.route ( '/profile/:portfolioProfileId' )
  .get ( asyncValidatorController ( [ check ( 'portfolioProfileId', 'Please provide a valid portfolio profile ID' ).isUUID () ])
    , getPortfolioImageByProfileIdController )
  .delete ( isLoggedIn, asyncValidatorController ( [ check ( 'portfolioProfileId', 'Please provide a valid portfolio profile ID' ).isUUID () ])
    , deletePortfolioImageController )
  .post ( isLoggedIn, asyncValidatorController ( [ check ( 'portfolioImageUrl', 'Please provide a valid Image URL' ).isURL () ])
    , postPortfolioController )

portfolioRoute.route ( '/:portfolioId' )
  .get ( asyncValidatorController ( [ check ( 'portfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
  , getPortfolioByPortfolioIdController )