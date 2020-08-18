import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import Column from './Column';
import { TextColumnsSection, Columns } from './styles';

const TextColumns = ({
  primary: { text_columns_title, text_columns_quantity },
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
    <TextColumnsSection className={className}>
      <Container>
        {text_columns_title && (
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
            <RichText render={text_columns_title} />
          </motion.div>
        )}
        {!!items?.length && (
          <Columns quantity={text_columns_quantity}>
            {items.map(column => {
              return <Column text={column.text_column_text} />;
            })}
          </Columns>
        )}
      </Container>
    </TextColumnsSection>
  );
};

TextColumns.propTypes = {
  primary: PropTypes.shape({
    text_columns_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    text_columns_quantity: PropTypes.string.isRequired,
  }).isRequired,
};

export default TextColumns;
