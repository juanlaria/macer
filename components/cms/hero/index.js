import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Image from '../../image';
import { HeroSection, Box } from './styles';

const Hero = ({ primary, className }) => {
  const {
    component_id,
    hero_background_image,
    hero_logo,
    hero_title,
    hero_description,
    grey,
  } = primary;
  const id = component_id && (RichText.asText(component_id) || null);
  if (primary) {
    return (
      <HeroSection id={id} className={`${className} ${grey ? '-grey' : ''}`}>
        {Object.entries(hero_background_image).length !== 0 && (
          <div className="bg-wrapper">
            <motion.div
              className="bg-inner-wrapper"
              transition={{
                damping: 20,
                stiffness: 25,
                duration: 1.25,
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
            >
              <Image
                data={hero_background_image}
                loading="lazy"
                className="bg"
              />
            </motion.div>
          </div>
        )}
        <Box>
          {Object.entries(hero_logo).length !== 0 && (
            <motion.div
              transition={{
                damping: 20,
                stiffness: 50,
                duration: 0.5,
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              className="logo"
            >
              <Image data={hero_logo} loading="lazy" className="logo" />
            </motion.div>
          )}
          {(hero_title || hero_description) && (
            <div className="text-wrapper">
              {hero_title && (
                <motion.h1
                  transition={{
                    damping: 20,
                    stiffness: 50,
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  initial={{ letterSpacing: '2px', opacity: 0 }}
                  animate={{ letterSpacing: '0px', opacity: 1 }}
                  className="title"
                >
                  {RichText.asText(hero_title)}
                </motion.h1>
              )}
              {hero_description && (
                <motion.div
                  transition={{
                    damping: 20,
                    stiffness: 50,
                    delay: 0.75,
                    duration: 0.5,
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <RichText render={hero_description} />
                </motion.div>
              )}
            </div>
          )}
        </Box>
      </HeroSection>
    );
  }
  return false;
};

Hero.propTypes = {
  primary: PropTypes.shape({
    hero_background_image: PropTypes.shape({}).isRequired,
    hero_logo: PropTypes.shape({}).isRequired,
    hero_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    hero_description: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Hero;
