import auth from "./auth"
import currentUser from "./currentUser"
import profiles from "./profiles"
import skills from "./skills"

import portfolios from "./portfolios"
import {configureStore,combineReducers} from "@reduxjs/toolkit";


const reducer = combineReducers({auth, currentUser, profiles, skills, portfolios})

export const store = configureStore({reducer});

