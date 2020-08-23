import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import Link from '../../link';
import { BannerCardSection, Box } from './styles';

const BannerCard = ({
  primary: {
    component_id,
    banner_card_title,
    banner_card_description,
    banner_card_button_label,
    banner_card_button_link,
    bg_top,
    bg_bottom,
  },
  className,
}) => {
  const id = component_id && (RichText.asText(component_id) || null);
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
    <BannerCardSection
      className={className}
      bgTop={bg_top}
      bgBottom={bg_bottom}
      ref={ref}
    >
      <div id={id} className="anchor" />
      <Container>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 20, opacity: 0 },
          }}
          transition={{
            damping: 20,
            stiffness: 25,
            duration: 0.5,
          }}
        >
          <Box>
            {banner_card_title && (
              <motion.h2
                className="title"
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { letterSpacing: '0px', opacity: 1 },
                  hidden: { letterSpacing: '2px', opacity: 0 },
                }}
                transition={{
                  damping: 20,
                  stiffness: 25,
                  delay: 0.25,
                  duration: 0.5,
                }}
              >
                {RichText.asText(banner_card_title)}
              </motion.h2>
            )}
            {banner_card_description && (
              <motion.div
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 20, opacity: 0 },
                }}
                transition={{
                  damping: 20,
                  stiffness: 25,
                  delay: 0.25,
                  duration: 0.5,
                }}
              >
                <RichText render={banner_card_description} />
              </motion.div>
            )}
            {banner_card_button_label && banner_card_button_link && (
              <Link link={banner_card_button_link} className="button">
                {RichText.asText(banner_card_button_label)}
              </Link>
            )}
          </Box>
        </motion.div>
      </Container>
    </BannerCardSection>
  );
};

BannerCard.propTypes = {
  primary: PropTypes.shape({
    banner_card_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    banner_card_description: PropTypes.arrayOf(PropTypes.shape({})),
    banner_card_image: PropTypes.shape({}).isRequired,
    banner_card_button_label: PropTypes.arrayOf(PropTypes.shape({})),
    banner_card_button_link: PropTypes.shape({}),
    banner_card_alignment: PropTypes.string,
  }).isRequired,
};

export default BannerCard;
