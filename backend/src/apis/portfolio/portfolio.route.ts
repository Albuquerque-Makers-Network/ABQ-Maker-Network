import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
  getPortfolioByPortfolioIdController,
  getPortfolioImageByProfileIdController,
  postPortfolioController
} from "./porfolio.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {portfolioValidator} from "./portfolio.validator";


export const portfolioRoute: Router = Router()
portfolioRoute.route('/')

portfolioRoute.route('/:portfolioId')
  .post ( isLoggedIn, asyncValidatorController ( ( checkSchema ( portfolioValidator )))
    , postPortfolioController)
  .get ( asyncValidatorController ( [ check ( 'porfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
  , getPortfolioByPortfolioIdController)
  .delete ( isLoggedIn, asyncValidatorController ( [ check ( 'porfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
    , postPortfolioController)

portfolioRoute.route('/:portfolioProfileId')
  .get ( asyncValidatorController ( [ check ( 'porfolioId', 'Please provide a valid portfolio ID' ).isUUID () ])
    , getPortfolioImageByProfileIdController)

