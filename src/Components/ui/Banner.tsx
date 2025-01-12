import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
      <div className="relative">
        <img src="https://i.postimg.cc/bYM2T1qy/hero-slider-bg-2.png" />
        <div className="absolute top-10 left-16 lg:top-80 right-20">
          <h1 className="text-white lg:text-7xl text-2xl font-semibold mb-6">
            CAR REPAIR & AUTO SERVICES
          </h1>
          <p className=" text-white lg:text-4xl font-semibold mb-6">
            Our skilled team of certified technicians is here to provide
            top-notch car <br /> repair and auto services to ensure your vehicle
            performs at its best.
          </p>
          <Link to="/services">
            <Button color="cyan" variant="solid" size="large">
              Explore our services
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/hGSJjr1r/hero-slider-bg-1.png" />
        <div className="absolute top-10 left-16 lg:top-80 right-20">
          <h1 className="text-white lg:text-7xl text-2xl font-semibold mb-6">
            CAR REPAIR & AUTO SERVICES
          </h1>
          <p className=" text-white lg:text-4xl font-semibold mb-6">
            Our skilled team of certified technicians is here to provide
            top-notch car <br /> repair and auto services to ensure your vehicle
            performs at its best.
          </p>
          <Link to="/services">
            <Button color="cyan" variant="solid" size="large">
              Explore our services
            </Button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
