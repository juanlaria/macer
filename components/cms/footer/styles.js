import styled from '@emotion/styled';

export const FooterSection = styled('footer')`
  margin-top: auto;
  padding-top: 6rem;
  padding-bottom: 4rem;

  background: var(--color-black);
  color: var(--color-white);
`;

export const Columns = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const LogosWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LinksWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 2.5rem;
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
`;
