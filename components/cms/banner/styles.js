import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const BannerSection = styled('section')`
  overflow: hidden;

  .component.-grey + & {
    &:before {
      background-color: var(--color-grey);
    }
  }

  .component:not(.-grey) + & {
    &:before {
      background-color: var(--color-white);
    }
  }
  
  @media (max-width: ${screenSMmax}) {
    &:before {
      content: '';
      display: block;
      height: 2rem;
      width: 100%;
      margin-top: -2rem;
      background: red;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    
    @media (max-width: ${screenSMmax}) {
      font-size: 0.8rem;
    }

    h2 + & {
      margin-top: 0.5rem;
    }

    & + .button {
      margin-top: 1.6rem;
    }
  }

  picture {
    display: flex;
    align-items: center;

    img {
      background-color: var(--color-grey);

      @media (max-width: ${screenSMmax}) {
        border-radius: 4px;
      }
    }
  }
`;

export const VideoWrapper = styled('div')`
  position: relative;
  height: 0;
  padding-top: calc((9/16) * 100%);
  box-shadow: var(--elevation-z4);
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover,
  &:focus,
  &:focus-within {
    box-shadow: var(--elevation-z8);
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TextSection = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${screenSMmax}) {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1.2rem;

    .-right & {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: ${screenSMmax}) {
    margin-top: -2rem;
  }
`;
