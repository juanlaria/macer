import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const LogosSection = styled('section')`
  text-align: center;

  .title {
    margin-bottom: 2.5rem;
  }

  .button {
    margin-top: 3rem;
  }
`;

export const Columns = styled('ul')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ImageWrapper = styled('li')`
  background-color: var(--color-grey);

  img {
    width: 100%;
    height: 100%;
  }
`;
