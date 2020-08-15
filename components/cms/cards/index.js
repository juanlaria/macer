import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import { CardsSection, Columns, Card, ImageWrapper, CardBox } from './styles';

const Cards = ({ primary: { cards_title, grey }, items, className }) => {
  return (
    <CardsSection className={`${className} ${grey && '-grey'}`}>
      <Container>
        {cards_title && <RichText render={cards_title} />}
        {!!items?.length && (
          <Columns>
            {items.map(card => (
              <Card>
                <ImageWrapper>
                  {objectNotEmpty(card.card_image) && (
                    <Image data={card.card_image} loading="lazy" />
                  )}
                </ImageWrapper>
                <CardBox>
                  {card.card_title && <RichText render={card.card_title} />}
                  {card.card_description && (
                    <RichText render={card.card_description} />
                  )}
                </CardBox>
              </Card>
            ))}
          </Columns>
        )}
      </Container>
    </CardsSection>
  );
};

Cards.propTypes = {
  primary: PropTypes.shape({
    cards_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Cards;
