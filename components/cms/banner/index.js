import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import Link from '../../link';
import { BannerSection, Wrapper, TextSection } from './styles';

const Banner = ({
  primary: {
    banner_title,
    banner_description,
    banner_image,
    banner_button_label,
    banner_button_link,
    banner_alignment: alignment,
    grey,
  },
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <BannerSection
      className={`${alignment === 'Right' ? '-right' : '-left'} ${className} ${
        grey ? '-grey' : ''
      }`}
      ref={ref}
    >
      <Container>
        <Wrapper>
          {banner_image && (
            <motion.div
              animate={controls}
              initial="hidden"
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: alignment === 'Right' ? -20 : 20, opacity: 0 },
              }}
              transition={{
                damping: 20,
                stiffness: 25,
                duration: 0.5,
              }}
            >
              <Image data={banner_image} loading="lazy" />
            </motion.div>
          )}
          <TextSection>
            {banner_title && (
              <motion.h2
                className="title"
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { x: 0, letterSpacing: '0px', opacity: 1 },
                  hidden: {
                    x: alignment === 'Right' ? 20 : -20,
                    letterSpacing: '2px',
                    opacity: 0,
                  },
                }}
                transition={{
                  damping: 20,
                  stiffness: 25,
                  duration: 0.5,
                }}
              >
                {RichText.asText(banner_title)}
              </motion.h2>
            )}
            {banner_description && (
              <motion.div
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: alignment === 'Right' ? 20 : -20, opacity: 0 },
                }}
                transition={{
                  damping: 20,
                  stiffness: 25,
                  delay: 0.25,
                  duration: 0.5,
                }}
              >
                <RichText render={banner_description} />
              </motion.div>
            )}
            {banner_button_label &&
              RichText.asText(banner_button_label) &&
              banner_button_link && (
                <motion.div
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: alignment === 'Right' ? 20 : -20, opacity: 0 },
                  }}
                  transition={{
                    damping: 20,
                    stiffness: 25,
                    delay: 0.75,
                    duration: 0.5,
                  }}
                >
                  <Link link={banner_button_link} className="button">
                    {RichText.asText(banner_button_label)}
                  </Link>
                </motion.div>
              )}
          </TextSection>
        </Wrapper>
      </Container>
    </BannerSection>
  );
};

Banner.propTypes = {
  primary: PropTypes.shape({
    banner_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    banner_description: PropTypes.arrayOf(PropTypes.shape({})),
    banner_image: PropTypes.shape({}).isRequired,
    banner_button_label: PropTypes.arrayOf(PropTypes.shape({})),
    banner_button_link: PropTypes.shape({}),
    banner_alignment: PropTypes.string,
  }).isRequired,
};

export default Banner;
