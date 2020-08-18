import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import Card from './Card';
import { CardsSection, Columns } from './styles';

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
              <Card image={card.card_image} title={card.card_title} description={card.card_description} />
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
