import {Image} from "react-bootstrap";
import {useDispatch} from "react-redux";
export const PortfolioImage = ({ portfolioImage }) => {

  const dispatch = useDispatch()



  return (
    <>
      <Image src={portfolio.portfolioImageUrl} alt="portfolio image" className="p-2 rounded-4" id="portfolio-image"/>
      {/*<Image src="https://www.picsum.photos/250/200" alt="portfolio image"  className="p-2 rounded-4" id="portfolio-image"/>*/}
      {/*<Image src="https://www.picsum.photos/300/200" alt="portfolio image"  className="p-2 rounded-4" id="portfolio-image"/>*/}
      {/*<Image src="https://www.picsum.photos/400/300" alt="portfolio image" className="p-2 rounded-4" id="portfolio-image"/>*/}
    </>
  )
}

