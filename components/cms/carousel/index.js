import { useState, useRef, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import { CarouselSection } from './styles';

const Carousel = ({ primary: { component_id }, items, className }) => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const sliderEl = useRef(null);
  const id = component_id && (RichText.asText(component_id) || null);

  const onSliderChange = newIndex => {
    setCurrent(newIndex);
  };

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: onSliderChange,
  };

  const handleClickImage = e => {
    e && e.preventDefault();

    setIsOpen(true);
  };

  const handleCloseModal = e => {
    e && e.preventDefault();

    setIsOpen(false);
  };

  useEffect(() => {
    sliderEl.current.slickGoTo(current);
  }, [current]);

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
          <Slider ref={sliderEl} {...settings}>
            {items.map((item, index) => {
              return (
                <div key={index} onClick={e => handleClickImage(e)}>
                  <Image data={item.carousel_image} loading="lazy" />
                </div>
              );
            })}
          </Slider>

          {isOpen && (
            <Lightbox
              mainSrc={items[current].carousel_image.url}
              nextSrc={
                current < items.length - 1 && items[current + 1].carousel_image.url
              }
              prevSrc={current > 0 && items[current - 1].carousel_image.url}
              onMovePrevRequest={() => setCurrent(current - 1)}
              onMoveNextRequest={() => setCurrent(current + 1)}
              onCloseRequest={handleCloseModal}
            />
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
