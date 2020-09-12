import { FieldWrapper } from './styles';

const Field = ({
  label,
  type,
  required,
  placeholder,
  name,
  register,
  errors,
}) => {
  let data;
  switch (type) {
    case 'Teléfono':
    case 'phone':
      data = {
        name,
        type: 'tel',
        required,
        label,
        placeholder,
      };
      break;
    case 'Email':
    case 'email':
      data = {
        name,
        type: 'email',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Email inválido',
        },
        required,
        label,
        placeholder,
      };
      break;
    case 'Archivo':
    case 'file':
      data = {
        name,
        type: 'file',
        required,
        label,
        placeholder,
      };
      break;
    case 'Texto largo':
    case 'textarea':
      data = {
        name,
        type: 'textarea',
        required,
        label,
        placeholder,
      };
      break;
    case 'Texto corto':
    case 'text':
    default:
      data = {
        name,
        type: 'text',
        required,
        label,
        placeholder,
      };
      break;
  }
  if (data.type === 'textarea') {
    return (
      <FieldWrapper htmlFor={data.name} type={data.type}>
        <textarea
          name={data.name}
          id={data.name}
          placeholder={data.placeholder}
          type={data.type}
          required={!!data.required}
          ref={register({
            required: data.required && 'Obligatorio',
            pattern: data.pattern,
          })}
        />
        {data.label && (
          <span className="label">{`${data.label}${
            data.required ? ' (obligatorio)' : ''
          }`}</span>
        )}
        {errors[data.name] && (
          <span className="error">{errors[data.name].message}</span>
        )}
      </FieldWrapper>
    );
  } else {
    return (
      <FieldWrapper htmlFor={data.name} type={data.type}>
        <input
          name={data.name}
          id={data.name}
          placeholder={data.placeholder}
          type={data.type}
          required={!!data.required}
          ref={register({
            required: data.required && 'Obligatorio',
            pattern: data.pattern,
          })}
        />
        {data.label && (
          <span className="label">{`${data.label}${
            data.required ? ' (obligatorio)' : ''
          }`}</span>
        )}
        {errors[data.name] && (
          <span className="error">{errors[data.name].message}</span>
        )}
      </FieldWrapper>
    );
  }
};

export default Field;
