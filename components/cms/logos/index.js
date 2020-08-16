import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import { objectNotEmpty } from '../../../utils/helpers';
import Image from '../../image';
import Link from '../../link';
import Item from './Item';
import { LogosSection, Columns } from './styles';

const Logos = ({
  primary: { logos_title, logos_button_label, logos_button_link, grey },
  items,
  className,
}) => {
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
    <LogosSection className={`${className} ${grey ? '-grey' : ''}`}>
      <Container>
        {logos_title && (
          <motion.h2
            className="title"
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
            {RichText.asText(logos_title)}
          </motion.h2>
        )}
        {!!items?.length && (
          <Columns>
            {items.map(item => {
              if (objectNotEmpty(item.logo_image)) {
                return (
                  <Item image={item.logo_image} />
                );
              }
            })}
          </Columns>
        )}
        <Link link={logos_button_link} className="button">
          {RichText.asText(logos_button_label)}
        </Link>
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
