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

export const fetchPortfolioByProfileId = (profileId) => {
  return async function (dispatch) {
  const { data } = await httpConfig(`/apis/portfolio/portfolioProfileId/${profileId}`)
  if ( Array.isArray(data)===false) {
    throw new Error('data is malformed')
  }

  const portfolios = data.reduce (
    (accumulator, currentValue) => {
      accumulator[currentValue.portfolioId] = currentValue
      return accumulator
    }
  )

  dispatch(getPortfoliosByProfileId(portfolios))
  }
}


export default portfolioSlice.reducer