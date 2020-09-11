import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const TextColumnsSection = styled('section')`
  h1 {
    line-height: 1.25;
    margin-bottom: 0.4em;

    @media (min-width: ${screenMDmin}) {
      font-size: 2.4rem !important;
    }
  }

  h2 {
    font-size: 1.6rem;
    line-height: 1.25;
    margin-bottom: 0.4em;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.33;
    margin-top: 1.6rem;
    margin-bottom: 0.4em;
  }
`;

export const Columns = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.4rem 1.2rem;

  @media (min-width: ${screenMDmin}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(${props => props.quantity}, 1fr);
  }

  .column {
    &:empty {
      @media (max-width: ${screenSMmax}) {
        display: none;
      }
    }
  }
`;
