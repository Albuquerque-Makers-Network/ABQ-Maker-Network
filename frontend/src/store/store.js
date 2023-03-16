import auth from "./auth"
import currentUser from "./currentUser"
import profiles from "./profiles"
import skills from "./skills"
import profileFilters from "./profileFilters.js";

import {configureStore,combineReducers} from "@reduxjs/toolkit";

const reducer = combineReducers({auth, currentUser, profiles, skills, profileFilters})
export const store = configureStore({reducer});

