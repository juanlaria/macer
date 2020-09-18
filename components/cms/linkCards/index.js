import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import Card from './Card';
import { LinkCardsSection, Columns } from './styles';

const LinkCards = ({
  primary: { component_id, link_cards_title, grey, related },
  items,
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
    <LinkCardsSection
      className={`${className} ${grey && '-grey'}`}
      related={related}
    >
      <div id={id} className="anchor" />
      <Container>
        {link_cards_title && (
          <motion.h2
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
            className="title"
          >
            {RichText.asText(link_cards_title)}
          </motion.h2>
        )}
        {!!items?.length && (
          <Columns>
            {items.map(card => (
              <Card
                link={card.card_link}
                image={card.card_image}
                title={card.card_title}
                description={card.card_description}
              />
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
