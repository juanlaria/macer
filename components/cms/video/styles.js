import styled from '@emotion/styled';

export const VideoSection = styled('section')`
`;

export const VideoWrapper = styled('div')`
  position: relative;
  height: 0;
  padding-top: calc((9/16) * 100%);
  box-shadow: var(--elevation-z4);
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover,
  &:focus,
  &:focus-within {
    box-shadow: var(--elevation-z8);
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;