import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import { CardsSection, Columns, Card, ImageWrapper, CardBox } from './styles';

const Cards = ({ primary: { cards_title, grey }, items, className }) => {
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
    <CardsSection className={`${className} ${grey && '-grey'}`}>
      <Container>
        {cards_title && (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { letterSpacing: '0px', opacity: 1 },
              hidden: { letterSpacing: '2px', opacity: 0 },
            }}
            transition={{
              damping: 20,
              stiffness: 25,
              duration: 0.5,
            }}
          >
            <RichText render={cards_title} />
          </motion.div>
        )}
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
