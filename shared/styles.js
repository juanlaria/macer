import { keyframes, css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import {
  screenSMmin,
  screenSMmax,
  screenMDmin,
  screenMDmax,
  screenLGmin,
  screenXLmin,
} from './breakpoints';

export const globalStyles = (
  <Global
    styles={css`
      :root {
        --color-grey: #4f4c4c;
        --color-lightGrey: #f8f8f8;
        --color-darkGrey: #797979;
        --color-black: #212121;
        --color-white: #ffffff;
        --color-yellow: #ffcb08;
        --color-darkYellow: #edbb0c;

        --border-radius: 8px;

        --header-size: 3rem;

        @media (min-width: ${screenMDmin}) {
          --header-size: 5rem;
        }

        --font-primary: 'Hind', Helvetica, Arial, sans-serif;

        --elevation-z1: 0 2px 1px -1px rgba(33, 33, 33, 0.1),
          0 1px 1px 0 rgba(33, 33, 33, 0.07), 0 1px 3px 0 rgba(33, 33, 33, 0.05);
        --elevation-z2: 0 3px 1px -2px rgba(33, 33, 33, 0.1),
          0 2px 2px 0 rgba(33, 33, 33, 0.07), 0 1px 5px 0 rgba(33, 33, 33, 0.05);
        --elevation-z4: 0 2px 4px -1px rgba(33, 33, 33, 0.1),
          0 4px 5px 0 rgba(33, 33, 33, 0.07),
          0 1px 10px 0 rgba(33, 33, 33, 0.05);
        --elevation-z6: 0 3px 5px -1px rgba(33, 33, 33, 0.1),
          0 6px 10px 0 rgba(33, 33, 33, 0.07),
          0 1px 18px 0 rgba(33, 33, 33, 0.05);
        --elevation-z8: 0 5px 5px -3px rgba(33, 33, 33, 0.1),
          0 8px 10px 1px rgba(33, 33, 33, 0.07),
          0 3px 14px 2px rgba(33, 33, 33, 0.05);
        --elevation-z12: 0 7px 8px -4px rgba(33, 33, 33, 0.1),
          0 12px 17px 2px rgba(33, 33, 33, 0.07),
          0 5px 22px 4px rgba(33, 33, 33, 0.05);
        --elevation-z16: 0 8px 10px -5px rgba(33, 33, 33, 0.1),
          0 16px 24px 2px rgba(33, 33, 33, 0.07),
          0 6px 30px 5px rgba(33, 33, 33, 0.05);

        --transition-elevation: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      html,
      body,
      #__next {
        margin: 0;
        background: var(--color-white);
        color: var(--color-black);
        height: 100%;
        font-family: var(--font-primary);
        font-size: 20px;
      }

      #__next {
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: 100%;
      }

      #page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        header + & {
          padding-top: calc(var(--header-size) * 1.25);
        }

        .back-section {
          padding-top: 2.8rem;
          padding-bottom: 2rem;
          
          @media (max-width: ${screenSMmax}) {
            display: none;
          }

          a,
          button {
            cursor: pointer;
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 1.33;
            text-decoration: none;
            display: flex;
            align-items: center;

            &:before {
              content: '';
              display: block;
              height: 12px;
              width: 6px;
              mask: url('/images/chevron.svg');
              mask-size: cover;
              margin-right: 0.85rem;
              background: var(--color-yellow);
            }
          }
        }

        #main {
          flex: 1;
        }

        .component {
          padding: 2.2rem 0;

          @media (max-width: ${screenSMmax}) {
            padding: 2rem 0;
          }

          &:first-of-type {
            padding-top: 0;
            padding-bottom: 0;
          }

          &:last-of-type {
            padding-bottom: 4.4rem;
          }
        }

        .title {
          @media (max-width: ${screenLGmin}) {
            font-size: 1.6rem;
          }
        }

        &.-error-page {
          #main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            small {
              font-size: 1rem;
              line-height: 1.6;
              text-align: center;
              color: var(--color-grey);
              margin-bottom: 0.8rem;
            }

            h1 {
              font-size: 2.4rem;
              line-height: 1.67;
              text-align: center;
            }

            .button {
              margin-top: 1.2rem;
            }
          }
        }
      }

      #main {
        header + & {
          padding-top: calc(var(--header-size) * 1.25);
        }
      }

      .component {
        position: relative;
        z-index: 1;
        padding: 4.4rem 0;
        background-color: var(--color-white);

        @media (max-width: ${screenSMmax}) {
          padding: 2rem 0;
        }

        &.-grey {
          background-color: var(--color-lightGrey);
        }

        .anchor {
          position: absolute;
          top: calc(var(--header-size) * -1);
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7 {
        font-weight: 600;
        margin: 0;
      }

      .title {
        font-size: 2.4rem;
        line-height: 1.25;
        margin-bottom: 0.4em;

        @media (max-width: ${screenMDmax}) {
          font-size: 2rem;
        }

        @media (max-width: ${screenSMmax}) {
          font-size: 1.6rem;
        }
      }

      p,
      ul {
        margin: 0;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-grey);

        @media (max-width: ${screenSMmax}) {
          font-size: 0.8rem;
        }

        & + & {
          margin-top: 1em;
        }
      }

      a {
        color: inherit;
      }

      .button {
        display: inline-block;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-black);
        text-decoration: none;
        text-align: center;
        padding: 0.8rem 1.6rem;
        background: var(--color-yellow);
        border-radius: var(--border-radius);
        box-shadow: var(--elevation-z2);
        transition: var(--transition-elevation);

        @media (max-width: ${screenSMmax}) {
          font-size: 0.8rem;
          line-height: 1.5;
          padding: 0.5rem 1.2rem;
        }

        &:hover,
        &:focus {
          box-shadow: var(--elevation-z4);
        }
      }

      /* Make images easier to work with */
      img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      button {
        padding: 0;
        border: 0;
        background: none;
      }

      /* Remove _all_ animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-play-state: paused !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  />
);

export const containerStyles = css`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  /* Small devices (phones, 480px and up) */
  @media (min-width: ${screenSMmin}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: ${screenMDmin}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Large devices (desktops, 1024px and up) */
  @media (min-width: ${screenLGmin}) {
    max-width: 990px;
  }

  /* Extra large devices (large desktops, 1440px and up) */
  @media (min-width: ${screenXLmin}) {
    max-width: 1200px;
  }
`;

/* Visually hidden class */
export const cloakStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &:focus,
  &:focus-within {
    background-color: red;
    color: white;
    clip: initial;
    height: auto;
    width: auto;
    display: inline-block;
  }
`;

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

export const Container = styled('div')`
  ${containerStyles};
`;

export const Cloak = styled('div')`
  ${cloakStyles};
`;

export const Basic = styled('div')`
  ${basicStyles};
`;

export const Combined = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;
export const Animated = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`;
