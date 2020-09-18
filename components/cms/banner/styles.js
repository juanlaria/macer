import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const BannerSection = styled('section')`
  overflow: hidden;
  
  @media (max-width: ${screenSMmax}) {
    margin-top: 2rem;
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
    margin-top: -4rem;
  }
`;
