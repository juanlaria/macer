import styled from '@emotion/styled';
import { screenSMmin, screenSMmax, screenMDmin } from '../../../shared/breakpoints';

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

export const FieldWrapper = styled('label')`
  ${props =>
    props.type === 'file'
      ? `
    input {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;

      &:focus + .label,
      & + .label:hover {
        background-color: var(--color-yellow);
        border-color: var(--color-yellow);
      }
    }

    .label {
      min-width: 13.2rem;
      cursor: pointer;
      display: inline-block;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-black);
      border: 2px solid;
      border-color: var(--color-black);
      text-decoration: none;
      text-align: center;
      padding: 0.8rem 1.6rem;
      background: transparent;
      border-radius: var(--border-radius);
      box-shadow: var(--elevation-z2);
      transition: var(--transition-elevation);

      @media (max-width: ${screenSMmax}) {
        font-size: 0.8rem;
        line-height: 1.5;
        padding: 0.5rem 1.2rem;
      }

      &:hover,
      &:focus {
        box-shadow: var(--elevation-z4);
      }

      &:focus {
        border-color: var(--color-black);
      }
    }
`
      : `
position: relative;

font-size: 0.8rem;
line-height: 1.5;
font-style: normal;
font-weight: 400;
color: var(--color-grey);

@media (min-width: ${screenSMmin}) {
  grid-column-start: ${props => (props.type === 'textarea' ? '1' : '')};
  grid-column-end: ${props => (props.type === 'textarea' ? '3' : '')};
  font-size: 1rem;
  line-height: 1.6;
}

input,
textarea {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  background: var(--color-lightGrey);
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.8rem 0.8rem 0.6rem;
  outline: 0;

  touch-action: manipulation;
  transition: all 0.2s;

  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-weight: inherit;
  color: inherit;

  @media (min-width: ${screenSMmin}) {
    padding: 0.8rem 1.2rem 0.6rem;
  }

  /**
  * By default, the placeholder should be transparent. Also, it should 
  * inherit the transition.
  */
  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  /**
  * Show the placeholder when the input is focused.
  */
  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  /**
  * Translate down and scale the label up to cover the placeholder,
  * when following an input (with placeholder-shown support).
  * Also make sure the label is only on one row, at max 2/3rds of the
  * field—to make sure it scales properly and doesn't wrap.
  */
  &:placeholder-shown + .label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 1.6rem) scale(1.6);
  }

  /**
   * When the element is focused, remove the label transform.
   * Also, do this when the placeholder is _not_ shown, i.e. when 
   * there's something in the input at all.
   */
  &:not(:placeholder-shown) + .label,
  &:focus + .label {
    transform: translate(0, 0.2rem) scale(1);
    pointer-events: none;
  }

  &:focus {
    border-color: var(--color-darkYellow);
  }
}

input {
  height: 3.2rem;
}

textarea {
  height: 8.4rem;
}

.label {
  font-size: 0.6rem;
  position: absolute;
  top: 0;
  left: 0.6rem;
  touch-action: manipulation;
  transition: all 0.2s;

  @media (min-width: ${screenSMmin}) {
    left: 1.2rem;
  }
}

.error {
  font-size: 0.6rem;
  position: absolute;
  left: 0;
  top: 100%;
  color: var(--color-red);
}
`}
`;

export const CtaWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.2rem;

  @media (min-width: ${screenSMmin}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const Submit = styled('button')`
  transition: 400ms ease-in-out;

  @media (min-width: ${screenMDmin}) {
    min-width: 13.2rem;
  }
`;
