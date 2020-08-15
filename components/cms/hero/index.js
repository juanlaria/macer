import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import Image from '../../image';
import { HeroSection, Box } from './styles';

const Hero = ({ primary, className }) => {
  const {
    hero_background_image,
    hero_logo,
    hero_title,
    hero_description,
    grey,
  } = primary;
  if (primary) {
    return (
      <HeroSection className={`${className} ${grey ? '-grey' : ''}`}>
        {hero_background_image && (
          <Image data={hero_background_image} loading="lazy" className="bg" />
        )}
        <Box>
          {hero_logo && (
            <Image data={hero_logo} loading="lazy" className="logo" />
          )}
          {(hero_title || hero_description) && (
            <div className="text-wrapper">
              {hero_title && <h1 className="title">{RichText.asText(hero_title)}</h1>}
              {hero_description && <RichText render={hero_description} />}
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
