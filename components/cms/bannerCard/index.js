import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Link from '../../link';
import { BannerCardSection, Box } from './styles';

const BannerCard = ({
  primary: {
    banner_card_title,
    banner_card_description,
    banner_card_button_label,
    banner_card_button_link,
    bg_top,
    bg_bottom,
  },
  className,
}) => {
  return (
    <BannerCardSection className={className} bgTop={bg_top} bgBottom={bg_bottom}>
      <Container>
        <Box>
          {banner_card_title && (
            <h2 className="title">{RichText.asText(banner_card_title)}</h2>
          )}
          {banner_card_description && (
            <RichText render={banner_card_description} />
          )}
          {banner_card_button_label && banner_card_button_link && (
            <Link link={banner_card_button_link} className="button">
              {RichText.asText(banner_card_button_label)}
            </Link>
          )}
        </Box>
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
