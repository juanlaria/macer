import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import { TextColumnsSection, Columns } from './styles';

const TextColumns = ({
  primary: {
    text_columns_title,
    text_columns_quantity,
  },
  items,
  className
}) => {
  return (
    <TextColumnsSection className={className}>
      <Container>
        {text_columns_title && <RichText render={text_columns_title} />}
        {!!items?.length && (
          <Columns quantity={text_columns_quantity}>
            {items.map(column => {
              return (
                <div className="column">
                  <RichText render={column.text_column_text} />
                </div>
              )
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
