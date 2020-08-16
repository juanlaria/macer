import styled from '@emotion/styled';

export const LinkCardsSection = styled('section')`
padding-top: ${props => props.related && '4.4rem !important'};
padding-bottom: ${props => props.related && '0 !important'};
background-color: ${props => props.related && 'var(--color-black) !important'};

  .title {
    font-size: ${props => props.related && '2.4rem !important'};
    text-align: ${props => props.related ? 'left' : 'center'};
    color: ${props => props.related && 'var(--color-white) !important'};
    margin-bottom: ${props => props.related ? '1.2rem' : '2.5rem'};
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
  height: 100%;
  background-color: var(--color-white);
  box-shadow: var(--elevation-z4);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition-elevation);

  &:hover,
  &:focus,
  &:focus-within {
    box-shadow: var(--elevation-z8);
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.33;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const CardImage = styled('div')`
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background-color: var(--color-darkGrey);
  }
`;

export const CardBox = styled('div')`
  justify-self: flex-end;
  padding: 1.25rem;

  p {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;
