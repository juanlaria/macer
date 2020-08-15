import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Container } from '../../../shared/styles';
import Image from '../../image';
import Link from '../../link';
import {
  FooterSection,
  Columns,
  LogosWrapper,
  LinksWrapper,
  ContactLinks,
  SocialLinks,
  MapWrapper,
} from './styles';

const Footer = ({
  footer_logo,
  footer_iso,
  footer_social,
  footer_contact,
  className,
}) => {
  return (
    <FooterSection className={className ? className : ''}>
      <Container>
        <Columns>
          <LogosWrapper>
            {footer_logo && <Image data={footer_logo} loading="lazy" />}
            {footer_iso && <Image data={footer_iso} loading="lazy" fit />}
          </LogosWrapper>
          <LinksWrapper>
            {footer_contact && (
              <ContactLinks>
                {footer_contact.map(item => {
                  if (item.contact_link?.link_type === 'Any') {
                    return (
                      <li>
                        <span className="text-wrapper">
                          <Image data={item.contact_image} loading="lazy" />
                          <RichText render={item.contact_text} />
                        </span>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link link={item.contact_link} className="text-wrapper">
                          <Image data={item.contact_image} loading="lazy" />
                          <RichText render={item.contact_text} />
                        </Link>
                      </li>
                    );
                  }
                })}
              </ContactLinks>
            )}
            {footer_social && (
              <SocialLinks>
                {footer_social.map(item => (
                  <li>
                    <Link link={item.social_link}>
                      <Image data={item.social_image} loading="lazy" />
                    </Link>
                  </li>
                ))}
              </SocialLinks>
            )}
          </LinksWrapper>
          <MapWrapper>
            <img src="http://via.placeholder.com/456x287" alt="" />
          </MapWrapper>
        </Columns>
      </Container>
    </FooterSection>
  );
};

Footer.propTypes = {
  footer_links: PropTypes.arrayOf(PropTypes.shape({})),
  footer_icon: PropTypes.shape({}),
  footer_text: PropTypes.arrayOf(PropTypes.shape({})),
  className: PropTypes.string,
};

Footer.defaultProps = {
  footer_links: null,
  footer_icon: null,
  footer_text: null,
  className: null,
};

export default Footer;
