import { Schema } from "express-validator";

export const profileValidator: Schema = {

    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileProfileId'
        }
    },
    profileAboutMe: {
        isLength: {
            errorMessage: 'About me must have 350 characters or less',
            options: {max: 350}
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    profileEmail: {
        isEmail:  {
            errorMessage: 'Please provide a valid email address'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    },
    profileFullName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Profile name must be between 1 and 32 characters',
            options: {min: 1, max: 32}
        }
    },
    profileImageUrl: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'Profile image is malformed please upload new image'
        }
    },
    profileIsMaker: {
        isBoolean: true
    },

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Username must be between 7 and 64 characters',
            options: { min: 7, max: 64 }
        }
    },
    profilePricing: {
        isLength: {
            errorMessage: 'About me must have 128 characters or less',
            options: {max: 128}
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },

}