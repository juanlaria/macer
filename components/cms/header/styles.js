import styled from '@emotion/styled';
import { screenSMmax, screenMDmin } from '../../../shared/breakpoints';

export const HeaderSection = styled('header')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props =>
    props.scrolled ? 'calc(var(--header-size) / 1.25)' : 'var(--header-size)'};
  z-index: 2;
  background-color: white;
  box-shadow: ${props =>
    props.scrolled ? 'var(--elevation-z12)' : 'var(--elevation-z8)'};
  : ;
  transition: all 400ms ease-in-out;

  picture {
    img {
      max-height: ${props =>
        props.scrolled ? '50px' : '58px'};
      object-fit: contain;
      object-position: left;
      transition: max-height 400ms ease-in-out;
    }
  }
`;

export const Wrapper = styled('div')`
  @media (min-width: ${screenMDmin}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SkipToContent = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    position: absolute;
    top: 0;
    background: black;
    color: white;
    text-decoration: none;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s;

    &:focus {
      transform: translateY(0%);
    }
  }
`;

export const Nav = styled('nav')`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: ${screenSMmax}) {
      display: none;
      padding-left: 0;
    }

    @media (min-width: ${screenMDmin}) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  li {
    & + li {
      @media (max-width: ${screenSMmax}) {
        margin-top: 0.5rem;
      }
      @media (min-width: ${screenMDmin}) {
        margin-left: 2.1rem;
      }
    }

    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;
