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

  summary {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 0.4rem;
    
    display: flex;
    align-items: center;
    list-style-image: url('/images/chevron-down-yellow.svg');

    @media (max-width: ${screenSMmax}) {
      font-size: 1rem;
    }
  }
  summary::-webkit-details-marker {
    background-image: url('/images/chevron-down-yellow.svg');
    color: transparent;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  details {
    &[open] {
      summary {
        list-style-image: url('/images/chevron-up-yellow.svg');
      }
      summary::-webkit-details-marker {
        background-image: url('/images/chevron-up-yellow.svg');
      }
    }

    & + details {
      margin-top: 1.6rem;

      @media (max-width: ${screenSMmax}) {
        margin-top: 1.2rem;
      }
    }

    p + p, ul + ul {
      margin-top: 0;
    }
  }
`;

export const Columns = styled('div')`
margin-top: 0.8rem;

  @media (min-width: ${screenMDmin}) {
    margin-top: 1.6rem;
    columns: 2;
    columns ${props => props.quantity};
  }

  .column {
    &:empty {
      @media (max-width: ${screenSMmax}) {
        display: none;
      }
    }
  }
`;
