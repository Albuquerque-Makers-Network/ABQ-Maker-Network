import {Schema} from "express-validator";
import {escape} from "querystring";

export const signupValidator: Schema = {

    profileAboutMe: {
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

    profilePassword: {
    isLength: {
        errorMessage: 'Password must be at least eight characters',
        options: {min: 8}
    },
        trim: true,
        escape: true,
    },

    profilePasswordConfirm: {
    isLength: {
        errorMessage: 'Confirm password must be at least eight characters',
    },
        trim: true,
        escape: true
    },

    profileImageURL: {
    optional: true,
    isURL: {
        errorMessage: 'Profile image is malformed please upload new image'
    }
    },


// profileIsMaker:

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Username must be between 7 and 64 characters',
            options: { min: 7, max: 64 }
        }
    },

    profilePricing: {
        optional: {
            options: {
                nullable: true
            }
        }
    },
}