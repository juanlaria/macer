import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useForm } from 'react-hook-form';
import { Container } from '../../../shared/styles';
import { FormSection, FormWrapper, CtaWrapper, Submit } from './styles';
import Field from './Field';

const Form = ({ primary: { component_id, file_input, file_input_label }, items, className }) => {
  const id = component_id && (RichText.asText(component_id) || null);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log('SUBMITED!', values);

  return (
    <FormSection className={className}>
      <div id={id} className="anchor" />
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {items &&
            items.map((field, index) => {
              return (
                <Field
                  label={field.label}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  index={index}
                  register={register}
                  errors={errors}
                />
              );
            })}
          <CtaWrapper>
            <Submit type="submit" className="button">Submit</Submit>

            <Field
              label={file_input_label || 'Adjuntar archivo'}
              type="file"
              register={register}
              errors={errors}
            />
          </CtaWrapper>
        </FormWrapper>
      </Container>
    </FormSection>
  );
};

Form.propTypes = {
  primary: PropTypes.shape({
    text_columns_title: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    text_columns_quantity: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
