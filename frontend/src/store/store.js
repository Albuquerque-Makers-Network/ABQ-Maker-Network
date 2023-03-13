import auth from "./auth"
import currentUser from "./currentUser"
import profiles from "./profiles"

import {configureStore,combineReducers} from "@reduxjs/toolkit";

const reducer = combineReducers({auth, currentUser, profiles})
export const store = configureStore({reducer});

