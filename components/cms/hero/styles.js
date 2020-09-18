import styled from '@emotion/styled';
import { screenXSmax, screenSMmax, screenMDmax, screenLGmin } from '../../../shared/breakpoints';

export const HeroSection = styled('section')`
  padding: 0 !important;

  @media (min-width: ${screenLGmin}) {
    height: calc(100vh - var(--header-size) * 1.25);
  }

  .bg-wrapper {
    display: block;

    overflow: hidden;
    height: 100%;
    max-height: 80vh;

    @media (min-width: ${screenLGmin}) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 0;
    }
  }

  .bg-inner-wrapper {
    height: 100%;
  }

  .bg {
    background-color: var(--color-grey);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: ${screenXSmax}) {
        height: 230px;
      }

      @media (max-width: ${screenSMmax}) {
        height: 300px;
      }
    }
  }
`;

export const Box = styled('div')`
  width: 100%;
  background-color: var(--color-white);
  text-align: center;

  @media (min-width: ${screenLGmin}) {
    position: absolute;
    bottom: 1.4rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--border-radius);
    max-width: 870px;
    padding: 3rem 2rem;
  }

  @media (max-width: ${screenMDmax}) {
    padding: 2rem 1rem;
  }

  .logo {
    display: inline-block;
    margin: 0 auto;
    
    @media (max-width: ${screenMDmax}) {
      display: none;
    }

    & + .text-wrapper {
      @media (min-width: ${screenLGmin}) {
        margin-top: 2.5rem;
      }
    }
  }

  .text-wrapper {
    margin: 0 auto;

    .title {
      & + p {
        margin-top: 1em;
      }
    }
  }
`;
