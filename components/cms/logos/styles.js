import styled from '@emotion/styled';
import { screenSMmin, screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const LogosSection = styled('section')`
  text-align: center;

  .title {
    margin-bottom: 2.5rem;

    @media (max-width: ${screenSMmax}) {
      margin-bottom: 1.2rem;
    }
  }

  .button {
    margin-top: 3rem;

    @media (max-width: ${screenSMmax}) {
      margin-top: 1.6rem;
    }
  }
`;

export const Columns = styled('ul')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${screenSMmin}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${screenMDmin}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ImageWrapper = styled('li')`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
