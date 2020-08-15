import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import Link from '../../link';
import { LogosSection, Columns, ImageWrapper } from './styles';

const Logos = ({ primary: { logos_title, logos_button_label, logos_button_link, grey }, items, className }) => {
  return (
    <LogosSection className={`${className} ${grey ? '-grey' : ''}`}>
      <Container>
        {logos_title && (
          <h2 className="title">{RichText.asText(logos_title)}</h2>
        )}
        {!!items?.length && (
          <Columns>
            {items.map(item => {
              if (objectNotEmpty(item.logo_image)) {
                return (
                  <ImageWrapper>
                    <Image data={item.logo_image} loading="lazy" />
                  </ImageWrapper>
                );
              }
            })}
          </Columns>
        )}
        <Link link={logos_button_link} className="button">{RichText.asText(logos_button_label)}</Link>
      </Container>
    </LogosSection>
  );
};

Logos.propTypes = {
  primary: PropTypes.shape({
    link_cards_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Logos;
