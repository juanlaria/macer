import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../../image';
import { ImageWrapper } from './styles';

const Card = ({ image }) => {
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
    <motion.div
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
      <ImageWrapper>
        <Image data={image} loading="lazy" />
      </ImageWrapper>
    </motion.div>
  );
};

export default Card;