import auth from "./auth"
import currentUser from "./currentUser"
import profiles from "./profiles"
import skills from "./skills"
import portfolios from "./portfolios"
import {configureStore,combineReducers} from "@reduxjs/toolkit";
import profileFilters from "./profileFilters.js";

const reducer = combineReducers({auth, currentUser, profiles, skills, portfolios, profileFilters})

export const store = configureStore({reducer});

