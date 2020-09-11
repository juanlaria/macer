import { RichText } from 'prismic-reactjs';
import { useForm } from 'react-hook-form';
import { FieldWrapper } from './styles';

const Field = ({ label, type, required, index, register, errors }) => {
  console.log('errors', errors);
  let data;
  switch (type) {
    case 'Teléfono':
      data = {
        name: `phone-${index}`,
        type: 'tel',
        required,
        label,
      };
      break;
    case 'Email':
      data = {
        name: `email-${index}`,
        type: 'email',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Email inválido',
        },
        required,
        label,
      };
      break;
    case 'Texto largo':
      data = {
        name: `textarea-${index}`,
        type: 'textarea',
        required,
        label,
      };
      break;
    case 'Texto corto':
    default:
      data = {
        name: `text-${index}`,
        type: 'text',
        required,
        label,
      };
      break;
  }
  if (data.type === 'textarea') {
    return (
      <FieldWrapper textarea>
        <textarea
          name={data.name}
          type={data.type}
          placeholder={RichText.asText(data.label)}
          ref={register({
            required: data.required && 'Obligatorio',
            pattern: data.pattern,
          })}
        />
        {errors[data.name] && errors[data.name].message}
      </FieldWrapper>
    );
  } else {
    return (
      <FieldWrapper>
        <input
          name={data.name}
          type={data.type}
          placeholder={`${RichText.asText(data.label)}${data.required ? ' (obligatorio)' : ''}`}
          ref={register({
            required: data.required && 'Obligatorio',
            pattern: data.pattern,
          })}
        />
        {errors[data.name] && errors[data.name].message}
      </FieldWrapper>
    );
  }
};

export default Field;
