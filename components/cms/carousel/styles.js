import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const CarouselSection = styled('section')`
  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 100px;
    background-color: var(--color-yellow);
    font-size: 0;
    color: transparent;
    cursor: pointer;
    box-shadow: var(--elevation-z2);
    transition: var(--transition-elevation);

    &:hover,
    &:focus {
      box-shadow: var(--elevation-z4);
    }

    &:before {
      content: '';
      display: block;
      background-image: url('/images/chevron.svg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 0.9rem;
      width: 0.45rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .slick-prev {
    left: 1.2rem;

    &:before {
      left: calc(50% - 0.1rem);
    }
  }

  .slick-next {
    right: 1.2rem;

    &:before {
      left: calc(50% + 0.1rem);
      transform: translate(-50%, -50%) rotate(0.5turn);
    }
  }

  .slick-dots {
    padding: 0;
    margin: 0;
    list-style: none;

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 1;
    margin-bottom: 1.2rem;

    li {
      display: inline-block;
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 100px;
      background: var(--color-white);
      font-size: 0;
      color: transparent;
      box-shadow: var(--elevation-z2);
      transition: var(--transition-elevation);

      &:hover,
      &:focus {
        box-shadow: var(--elevation-z4);
      }

      & + li {
        margin-left: 0.6rem;
      }

      &.slick-active {
        background: var(--color-yellow);
      }

      button {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
