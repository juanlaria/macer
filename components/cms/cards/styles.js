import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const CardsSection = styled('section')`
  h2 {
    display: inline-block;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.25;
    margin-bottom: 1.2rem;
    border-bottom: 2px solid var(--color-yellow);
  }
`;

export const Columns = styled('ul')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CardWrapper = styled('div')`
  h3 {
    font-size: 1.2rem;
    line-height: 1.33;
  }
`;

export const ImageWrapper = styled('div')`
  height: 7.5rem;
  background-color: var(--color-darkGrey);
  border-radius: 4px;
  overflow: hidden;

  picture {
    display: block;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CardBox = styled('div')`
  padding: 1.2rem 0;
`;
