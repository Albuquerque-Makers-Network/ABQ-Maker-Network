import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"

const portfolioSlice = createSlice ({
  name: "portfolios",
  initialState: [],
  reducers: {
    getAllPortfolios: ( portfolios, action) => {
      return action.payload
    },
    getPortfoliosByProfileId: ( portfolios, action ) => {
      return action.payload
    }
  }
})

export const { getAllPortfolios, getPortfoliosByProfileId } = portfolioSlice.actions

export const fetchPortfolioByProfileId = (portfolioProfileId) => async (dispatch, getState) => {
  const state = getState()
  const portfolios = state.portfolios
  if (portfolios[portfolioProfileId] === undefined){
  const {data} = await httpConfig(`/apis/portfolio/${portfolioProfileId}`)
  dispatch(getPortfoliosByProfileId(data))
    }
}

export const fetchAllPortfolios = () => {
  return async function (dispatch) {
    const {data} = await httpConfig(`/apis/portfolio`)
    dispatch(getAllPortfolios(data))
  }
}


export default portfolioSlice.reducer