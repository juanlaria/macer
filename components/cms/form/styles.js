import styled from '@emotion/styled';
import { screenSMmin, screenMDmin } from '../../../shared/breakpoints';

export const FormSection = styled('section')``;

export const FormWrapper = styled('form')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.2rem;

  @media (min-width: ${screenSMmin}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenMDmin}) {
    max-width: calc(2 / 3 * 100%);
  }
`;

export const FieldWrapper = styled('div')`
  @media (min-width: ${screenSMmin}) {
    grid-column-start: ${props => (props.textarea ? '1' : '')};
    grid-column-end: ${props => (props.textarea ? '3' : '')};
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    background: var(--color-lightGrey);
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.8rem 0.8rem 0.6rem;

    font-size: 0.8rem;
    line-height: 1.5;
    font-style: normal;
    font-weight: normal;
    color: var(--color-grey);

    @media (min-width: ${screenSMmin}) {
      padding: 0.8rem 1.2rem 0.6rem;
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  input {
    height: 3.2rem;
  }

  textarea {
    height: 8.4rem;
  }
`;

export const CtaWrapper = styled('div')`
  @media (min-width: ${screenSMmin}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const Submit = styled('button')`
  opacity: 0.6;
  cursor: not-allowed;
  min-width: 13.2rem;
  transition: 400ms ease-in-out;
`;
