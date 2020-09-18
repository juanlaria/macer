import styled from '@emotion/styled';
import { screenSMmax, screenMDmin, screenMDmax } from '../../../shared/breakpoints';

export const FooterSection = styled('footer')`
  margin-top: auto;
  padding-top: 6rem;
  padding-bottom: 4rem;

  background: var(--color-black);
  color: var(--color-white);
  
  @media (max-width: ${screenSMmax}) {
    flex-direction: column;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
`;

export const Columns = styled('div')`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: ${screenSMmax}) {
    flex-direction: column;
  }
`;

export const LogosWrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  
  @media (min-width: ${screenMDmin}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const LinksWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${screenMDmin}) {
    padding-left: 2.5rem;
  }
`;

export const ContactLinks = styled('ul')`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    & + li {
      margin-top: 1.2rem;
    }
  }

  .text-wrapper {
    text-decoration: none;
    display: flex;
    align-items: center;

    picture {
      height: 27px;
      width: 27px;
      object-fit: contain;

      & + p {
        margin-left: 0.75rem;
      }
    }

    p {
      color: var(--color-white);
    }
  }
`;

export const SocialLinks = styled('ul')`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  li {
    & + li {
      margin-left: 1.2rem;
    }
  }
`;

export const MapWrapper = styled('div')`
  @media (max-width: ${screenMDmax}) {
    display: none;
  }
`;
