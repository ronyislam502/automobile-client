import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
      <div className="relative">
        <img src="https://i.postimg.cc/LXqc88Bj/b1.jpg" className="w-50%" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[300px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            "Experience Premium Car Wash Services"
          </p>
          <Link to="/services">
            <Button className="btn btn-primary">Explore our services</Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/L4Pddhsp/b2.webp" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[300px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            "Experience Premium Car Wash Services"
          </p>
          <Link to="/services">
            <button className="btn btn-primary ">Explore our services</button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/W127gM29/1.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[300px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            "Experience Premium Car Wash Services"
          </p>
          <Link to="/services">
            <Button className="btn btn-primary">Explore our services</Button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
