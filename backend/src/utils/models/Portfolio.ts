import {sql} from "../database.utils";


export interface Portfolio {
  portfolioId: string | null,
  portfolioProfileId: string
  portfolioImageUrl: string

}

/**
 * Function to insert profile object into postgres database
 * @param portfolio Portfolio object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/

export async function insertPortfolio ( portfolio: Portfolio ) : Promise < string > {
  const { portfolioProfileId, portfolioImageUrl } = portfolio
  await sql `INSERT INTO portfolio ( portfolio_id, portfolio_profile_id, portfolio_image_url ) VALUES ( gen_random_uuid(), ${ portfolioProfileId }, ${ portfolioImageUrl })`
  return 'Portfolio successfully updated'
}

export async function selectPortfolioByPortfolioId ( portfolioId : string ): Promise < Portfolio [] > {
return < Portfolio [] >
  await sql `SELECT portfolio_id, portfolio_profile_id, portfolio_image_url FROM portfolio WHERE portfolio_id = ${ portfolioId }`
}

export async function selectPortfolioByPortfolioProfileId
( portfolioProfileId: string ) : Promise < Portfolio [] > {
  return < Portfolio [] >
  await sql `SELECT portfolio_id, portfolio_profile_id, portfolio_image_url FROM portfolio WHERE portfolio_profile_id = ${ portfolioProfileId }`
}

export async function deletePortfolio ( portfolio : Portfolio ) : Promise < string > {
  const { portfolioId, portfolioProfileId, portfolioImageUrl } = portfolio
  await sql `DELETE FROM portfolio WHERE portfolio_id = ${ portfolioId } AND portfolio_image_url = ${ portfolioImageUrl }`
  return 'Portfolio successfully deleted'
}

