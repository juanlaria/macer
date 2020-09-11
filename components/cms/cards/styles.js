import styled from '@emotion/styled';
import { screenSMmin, screenMDmin } from '../../../shared/breakpoints';

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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${screenSMmin}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenMDmin}) {
    grid-template-columns: repeat(3, 1fr);
  }
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
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const CardBox = styled('div')`
  padding: 1.2rem 0;
`;
