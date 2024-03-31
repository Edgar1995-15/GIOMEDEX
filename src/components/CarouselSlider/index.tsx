import { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';

interface CarouselSliderProps {
  children: ReactNode;
  className?: string;
}

const CarouselSlider: FC<CarouselSliderProps> = ({ children, className }) => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`mx-auto w-full md:hidden ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CarouselSlider;
