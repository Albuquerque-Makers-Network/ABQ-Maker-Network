import profiles from "./profiles"

import {configureStore,combineReducers} from "@reduxjs/toolkit";

const reducer = combineReducers({profiles})
export default configureStore({reducer});

