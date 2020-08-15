import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import { CarouselSection } from './styles';

const Carousel = ({ items, className }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <CarouselSection className={className}>
        <Container>
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <Image data={item.carousel_image} loading="lazy" key={index} />
              );
            })}
          </Slider>
        </Container>
      </CarouselSection>
    </>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Carousel;
