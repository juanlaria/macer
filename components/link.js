import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { hrefResolver, linkResolver } from '../prismic-configuration';

const Link = ({ link, hash, children, className }) => {
  let result = '';
  const hashText = hash && RichText.asText(hash);
  const url =
    link.link_type === 'Document'
      ? hrefResolver(link)
      : PrismicLink.url(link, linkResolver);
  const urlWithHash = `${url ? url : '/'}${hashText ? `#${hashText}` : ''}`;

  if (link.link_type === 'Document') {
    result = (
      <NextLink as={linkResolver(link)} href={urlWithHash}>
        <a className={className}>{children}</a>
      </NextLink>
    );
  } else {
    const target = link.target ? { target: link.target, rel: 'noopener' } : {};
    result = (
      <a href={urlWithHash} {...target} className={className}>
        {children}
      </a>
    );
  }
  return result;
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

Link.defaultTypes = {
  classname: null,
};

export default Link;
