import styled from '@emotion/styled';
import {
  screenSMmin,
  screenSMmax,
  screenMDmin,
} from '../../../shared/breakpoints';

export const HeaderSection = styled('header')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props =>
    props.scrolled ? 'var(--header-size)' : 'calc(var(--header-size) * 1.25)'};
  z-index: 2;
  background-color: var(--color-black);
  box-shadow: ${props =>
    props.scrolled ? 'var(--elevation-z12)' : 'var(--elevation-z8)'};
  : ;
  transition: all 400ms ease-in-out;

  picture {
    img {
      max-height: 32px;
      object-fit: contain;
      object-position: left;
      transition: max-height 400ms ease-in-out;

      @media (min-width: ${screenMDmin}) {
        max-height: ${props => (props.scrolled ? '50px' : '58px')};
      }
    }
  }
`;

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    background: var(--color-black);
    color: var(--color-white);
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
  display: flex;
  align-items: center;

  .nav-button {
    @media (min-width: ${screenMDmin}) {
      display: none;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    /* Small devices (phones, 480px and up) */
    @media (min-width: ${screenSMmin}) {
      padding-left: 2rem;
      padding-right: 0;
    }

    @media (max-width: ${screenSMmax}) {
      transform: translateY(
        ${props =>
          props.isOpen ? '0' : 'calc(-100% - (var(--header-size) * 1.25))'}
      );

      position: absolute;
      top: var(--header-size);
      left: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: var(--color-black);
    }

    @media (min-width: ${screenMDmin}) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  li {
    @media (max-width: ${screenSMmax}) {
      margin-top: 1.6rem;
    }

    & + li {
      @media (min-width: ${screenMDmin}) {
        margin-left: 2.1rem;
      }
    }

    a:not(.button) {
      text-decoration: none;
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 600;
      color: var(--color-white);
    }
  }
`;
