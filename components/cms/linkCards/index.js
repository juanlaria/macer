import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import Link from '../../link';
import { LinkCardsSection, Columns, Card, CardImage, CardBox } from './styles';

const LinkCards = ({
  primary: { link_cards_title, grey, related },
  items,
  className,
}) => {
  return (
    <LinkCardsSection className={`${className} ${grey && '-grey'}`} related={related}>
      <Container>
        {link_cards_title && (
          <h2 className="title">{RichText.asText(link_cards_title)}</h2>
        )}
        {!!items?.length && (
          <Columns>
            {items.map(card => (
              <Card>
                <Link link={card.card_link}>
                  <CardImage>
                    {objectNotEmpty(card.card_image) && (
                      <Image data={card.card_image} loading="lazy" />
                    )}
                  </CardImage>
                  <CardBox>
                    {card.card_title && <RichText render={card.card_title} />}
                    {card.card_description && (
                      <RichText render={card.card_description} />
                    )}
                  </CardBox>
                </Link>
              </Card>
            ))}
          </Columns>
        )}
      </Container>
    </LinkCardsSection>
  );
};

LinkCards.propTypes = {
  primary: PropTypes.shape({
    link_cards_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    grey: PropTypes.bool.isRequired,
    related: PropTypes.bool.isRequired,
  }).isRequired,
};

export default LinkCards;
