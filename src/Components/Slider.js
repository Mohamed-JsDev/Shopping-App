// import { Container } from "react-bootstrap";
import image1 from "../img/IMAGE-1.png";
import image2 from "../img/IMAGE-2.png";
import image3 from "../img/IMAGE-3.png";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
