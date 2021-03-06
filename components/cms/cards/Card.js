import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import Link from '../../link';
import { CardWrapper, ImageWrapper, CardBox } from './styles';

const Card = ({ image, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{
        damping: 20,
        stiffness: 25,
        duration: 0.5,
      }}
    >
      <CardWrapper>
        <ImageWrapper>
          {objectNotEmpty(image) && (
            <Image data={image} loading="lazy" />
          )}
        </ImageWrapper>
        <CardBox>
          {title && <RichText render={title} />}
          {description && (
            <RichText render={description} />
          )}
        </CardBox>
      </CardWrapper>
    </motion.li>
  );
};

export default Card;