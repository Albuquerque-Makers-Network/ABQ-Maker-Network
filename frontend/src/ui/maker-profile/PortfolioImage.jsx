import {Image} from "react-bootstrap";
import "./PortfolioImage.css";
export function PortfolioImage () {
  return (
    <>
      <Image src="https://www.picsum.photos/150/200" alt="portfolio image" className="p-2 rounded-4" id="portfolio-image"/>
      <Image src="https://www.picsum.photos/250/200" alt="portfolio image"  className="p-2 rounded-4" id="portfolio-image"/>
      <Image src="https://www.picsum.photos/300/200" alt="portfolio image"  className="p-2 rounded-4" id="portfolio-image"/>
      <Image src="https://www.picsum.photos/400/300" alt="portfolio image" className="p-2 rounded-4" id="portfolio-image"/>
    </>
  )
}