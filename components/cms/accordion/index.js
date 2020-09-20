import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import Accordion from './Accordion';
import { TextColumnsSection, Columns } from './styles';

const TextColumns = ({
  primary: { component_id, accordion_title, accordion_columns },
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
    <TextColumnsSection className={className}>
      <div id={id} className="anchor" />
      <Container>
        {accordion_title && (
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
            <RichText render={accordion_title} />
          </motion.div>
        )}
        {!!items?.length && (
          <Columns quantity={accordion_columns}>
            {items.map(accordion => (
              <Accordion {...accordion} />
            ))}
          </Columns>
        )}
      </Container>
    </TextColumnsSection>
  );
};

TextColumns.propTypes = {
  primary: PropTypes.shape({
    accordion_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    accordion_quantity: PropTypes.string.isRequired,
  }).isRequired,
};

export default TextColumns;
