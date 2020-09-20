import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useForm } from 'react-hook-form';
import 'isomorphic-fetch';
import { Container } from '../../../shared/styles';
import { FormSection, FormWrapper, CtaWrapper, Submit } from './styles';
import Field from './Field';

const Form = ({
  primary: {
    component_id,
    emails_list,
    email_subject,
    accept_extensions,
    file_input,
    file_input_label,
  },
  items,
  className,
}) => {
  let initializeFields = items
    ? items.map((field, index) => {
        return {
          ...field,
          label: RichText.asText(field.label) || field.type,
          placeholder: RichText.asText(field.placeholder) || field.type,
          id: `field-${index}`,
          value: '',
        };
      })
    : [];
  if (file_input) {
    initializeFields.push({
      id: `field-${initializeFields.length + 1}`,
      label: RichText.asText(file_input_label) || 'Adjuntar archivo',
      type: 'file',
    });
  }
  const [formStatus, setFormStatus] = useState('INITIAL');
  const [formFields, setFormFields] = useState(initializeFields);
  const [submitButtonText, setSubmitButtonText] = useState('Enviar');
  const [file, setFile] = useState(null);
  const id = component_id && (RichText.asText(component_id) || null);
  const { handleSubmit, register, errors } = useForm();

  const getFile = formFile => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = () => {
        var data = reader.result;
        resolve(data);
      };
      reader.readAsDataURL(formFile);
    });
  };

  const getFormValues = async (formState, formSubmitted) => {
    const getFormValue = async (formField, formSubmitted) => {
      let currentField = formField;
      if (currentField.type === 'file') {
        if (formSubmitted[currentField.id].length) {
          currentField.value = {
            filename: formSubmitted[currentField.id][0]?.name,
            content: await getFile(formSubmitted[currentField.id][0]),
          };
        } else {
          currentField.value = null;
        }
      } else {
        currentField.value = formSubmitted[currentField.id];
      }
      return currentField;
    };

    return Promise.all(
      formState.map(formField => getFormValue(formField, formSubmitted))
    );
  };

  const onSubmit = async submittedForm => {
    const formValues = await getFormValues(formFields, submittedForm);
    formValues.push({
      type: 'emailsList',
      value: RichText.asText(emails_list),
    });
    formValues.push({
      type: 'emailSubject',
      value: RichText.asText(email_subject),
    });

    fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    }).then(res => {
      res.status === 200 ? setFormStatus('SUBMITTED') : setFormStatus('FAILED');
    });
  };

  useEffect(() => {
    switch (formStatus) {
      case 'SUBMITTED':
        setSubmitButtonText('¡Enviado!');
        break;
      case 'FAILED':
        setSubmitButtonText('Volver a intentar');
        setFormFields(initializeFields);
        break;
      default:
      case 'INITIAL':
        setFormFields(initializeFields);
        break;
    }
  }, [formStatus]);

  return (
    <FormSection className={className}>
      <div id={id} className="anchor" />
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {formFields &&
            formFields.map(field => {
              if (field.type !== 'file') {
                return (
                  <Field
                    label={field.label}
                    required={field.required}
                    placeholder={field.placeholder}
                    type={field.type}
                    name={field.id}
                    value={field.value}
                    register={register}
                    errors={errors}
                  />
                );
              }
              return false;
            })}
          <CtaWrapper>
            <Submit type="submit" className="button" disabled={formStatus === 'SUBMITTED'}>
              {submitButtonText}
            </Submit>
            {formFields.map(field => {
              if (field.type === 'file') {
                return (
                  <Field
                    label={
                      RichText.asText(file_input_label) || 'Adjuntar archivo'
                    }
                    type="file"
                    accept={RichText.asText(accept_extensions)}
                    name={field.id}
                    register={register}
                    errors={errors}
                  />
                );
              }
              return false;
            })}
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
