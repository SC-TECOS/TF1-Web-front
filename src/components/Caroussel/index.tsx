import React, { memo } from "react";
import Slider from "react-slick";

export interface ICarouselProps {
  slides?: number;
  speed?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  children?: any;
}
const CarouselMultiply: React.FC<ICarouselProps> = ({
  autoplay,
  autoplaySpeed,
  slides,
  children,
}) => {
  // all settings: https://github.com/akiran/react-slick
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default memo(CarouselMultiply);
