import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpconfig"

const portfolioSlice = createSlice ({
  name: "portfolios",
  initialState: {},
  reducers: {
    setPortfolio: ( portfolios, action) => {
      portfolios[action.payload.portfolioProfileId] = action.payload.data
    },
    setAllPortfolios: ( portfolios, action ) => {
      return action.payload
    }
  }
})

export const { setPortfolio, setAllPortfolios } = portfolioSlice.actions

export const fetchPortfolioByProfileId = (profileId) => async (dispatch, getState) => {
  const state = getState()

  const portfolios = state.portfolios
  console.log (portfolios [portfolioId])
  if (profile[profileId] === undefined) {
    const {data} = await
      httpConfig (`/apis/portfolio/${portfolioId}`)
    dispatch(setPortfolio({portfolioId, data}))
  }
}

console.log ('actions', profileSlice)

export const fetchAllPortfolios = () => {
  return async function ( dispatch ) {
    const {data} = await httpConfig ( '/apis/portfolio/' )
    if ( Array.isArray(data) === false ){
      throw new Error('data is malformed')
    }
    const portfolioDictionary = data.reduce(
      (accumulator, currentValue) => {
        accumulator[currentValue.portfolioId] = currentValue
        return accumulator
      },
      {}
    )
    console.log( portfolioDictionary )
    dispatch ( setAllPortfolios ( portfolioDictionary ))
  }
}


export default portfolioSlice.reducer