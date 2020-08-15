import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
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
  return (
    <BannerSection
      className={`${alignment === 'Right' ? '-right' : '-left'} ${className} ${
        grey ? '-grey' : ''
      }`}
    >
      <Container>
        <Wrapper>
          {banner_image && <Image data={banner_image} loading="lazy" />}
          <TextSection>
            {banner_title && (
              <h2 className="title">{RichText.asText(banner_title)}</h2>
            )}
            {banner_description && <RichText render={banner_description} />}
            {banner_button_label &&
              RichText.asText(banner_button_label) &&
              banner_button_link && (
                <Link link={banner_button_link} className="button">
                  {RichText.asText(banner_button_label)}
                </Link>
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
