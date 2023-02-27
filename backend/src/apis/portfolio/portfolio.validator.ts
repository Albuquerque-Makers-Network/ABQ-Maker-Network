import { Schema } from "express-validator";

export const portfolioValidator: Schema = {

    portfolioId: {
        isUUID: {
            errorMessage: 'please provide a valid portfolioId'
        }
    },

    portfolioProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid portfolioId'
        }
    },

    portfolioImageUrl: {
        isURL: {
            errorMessage: 'Profile image is malformed please upload new image'
        }
    },
}git