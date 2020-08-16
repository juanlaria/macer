import styled from '@emotion/styled';
import { screenLGmin } from '../../../shared/breakpoints';

export const HeroSection = styled('section')`
  @media (min-width: ${screenLGmin}) {
    height: 100vh;
  }

  .bg-wrapper {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;

    height: 100%;
    max-height: 80vh;
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
    }
  }
`;

export const Box = styled('div')`
  position: absolute;
  bottom: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--border-radius);

  width: 100%;
  max-width: 870px;
  padding: 3rem 2rem;

  background-color: var(--color-white);

  text-align: center;

  .logo {
    display: inline-block;
    margin: 0 auto;

    & + .text-wrapper {
      margin-top: 2.5rem;
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
