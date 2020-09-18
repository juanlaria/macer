import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import { CarouselSection } from './styles';

const Carousel = ({ primary: { component_id }, items, className }) => {
  const [current, setCurrent] = useState(null);
  const id = component_id && (RichText.asText(component_id) || null);
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClickImage = (e, image) => {
    console.log(image);
    e && e.preventDefault();

    setCurrent(image);
  };

  const handleCloseModal = e => {
    e && e.preventDefault();

    setCurrent(null);
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
      <CarouselSection id={id} className={className}>
        <Container>
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <div key={index} onClick={e => handleClickImage(e, item.carousel_image)}>
                  <Image data={item.carousel_image} loading="lazy" />
                </div>
              );
            })}
          </Slider>

          {current && (
            <Lightbox mainSrc={current.url} onCloseRequest={handleCloseModal} />
          )}
        </Container>
      </CarouselSection>
    </>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Carousel;
