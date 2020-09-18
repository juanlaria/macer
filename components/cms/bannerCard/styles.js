import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const BannerCardSection = styled('section')`
  padding: 0 !important;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    z-index: -1;
  }

  &:before {
    top: 0;
    background: ${props => props.bgTop};
  }

  &:after {
    bottom: 0;
    background: ${props => props.bgBottom};
  }
`;

export const Box = styled('div')`
  background: var(--color-white);
  box-shadow: var(--elevation-z4);
  border-radius: var(--border-radius);
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: ${screenSMmax}) {
    padding: 1.6rem 0.8rem;
  }

  .title {
    @media (min-width: ${screenMDmin}) {
      font-size: 2.4rem !important;
    }
  }

  .button {
    margin-top: 1.6rem;

    @media (min-width: ${screenMDmin}) {
      margin-top: 2.4rem;
    }
  }
`;