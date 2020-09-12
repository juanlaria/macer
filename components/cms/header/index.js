import { useState, useEffect, useCallback } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Container } from '../../../shared/styles';
import Link from '../../link';
import Image from '../../image';
import { HeaderSection, SkipToContent, Wrapper, Nav } from './styles';

const Header = ({
  header_links,
  header_cta_link,
  header_cta_label,
  site_logo,
  className,
}) => {
  if (!header_links?.length || !site_logo) {
    return false;
  }

  const [isScrolled, setIsScrolled] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getScrollY = () => {
    const { scrollY } = window;

    return scrollY;
  };

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const handleScroll = useCallback(() => {
    setIsScrolled(getScrollY());
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsScrolled(getScrollY());
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeaderSection className={className} scrolled={isScrolled} isOpen={isOpen}>
      <SkipToContent>
        <a href="#main">Ir al contenido</a>
      </SkipToContent>
      <Container>
        <Wrapper>
          {site_logo && (
            <NextLink as="/" href="/">
              <a>
                <Image
                  data={site_logo}
                  fit="clip"
                  width="264"
                  height="72"
                  loading="eager"
                />
              </a>
            </NextLink>
          )}
          {!!header_links?.length && (
            <Nav isOpen={isOpen}>
              <button
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-hidden
                onClick={handleMenuToggle}
                className="nav-button"
              >
                <img src={isOpen ? '/images/close.svg' : '/images/menu.svg'} />
              </button>
              <ul
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
              >
                {header_links.map((el, index) => (
                  <li key={`${el.link.id}-${index}`}>
                    <Link link={el.link} hash={el.link_hash}>
                      {RichText.asText(el.link_label)}
                    </Link>
                  </li>
                ))}
                {header_cta_label && header_cta_link && (
                  <li>
                    <Link link={header_cta_link} className="button">
                      {RichText.asText(header_cta_label)}
                    </Link>
                  </li>
                )}
              </ul>
            </Nav>
          )}
        </Wrapper>
      </Container>
    </HeaderSection>
  );
};

Header.propTypes = {
  header_links: PropTypes.arrayOf(PropTypes.shape({})),
  site_logo: PropTypes.shape({}),
};

Header.defaultProps = {
  header_links: null,
  site_logo: null,
};

export default Header;
