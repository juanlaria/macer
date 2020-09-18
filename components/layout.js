import PropTypes from 'prop-types';
import Link from 'next/link';
import Alert from './Alert';
import Meta from './meta';
import Header from './cms/header';
import Footer from './cms/footer';
import { Container } from '../shared/styles';

const Layout = ({
  preview,
  offline,
  metadata,
  homepage,
  social,
  header,
  footer,
  children,
}) => {
  const showAlert = preview || offline;
  return (
    <>
      <Meta metadata={metadata} social={social} />
      {showAlert && <Alert preview={preview} offline={offline} />}
      {header && <Header {...header.data} />}
      {homepage ? (
        <main id="main">{children}</main>
      ) : (
        <div id="page">
          <section className="back-section">
            <Container>
              <Link href="/" as="/">
                <a>Volver al inicio</a>
              </Link>
            </Container>
          </section>
          <main id="main">{children}</main>
        </div>
      )}
      {footer && <Footer {...footer.data} />}
    </>
  );
};

Layout.propTypes = {
  preview: PropTypes.bool,
  offline: PropTypes.bool,
  metadata: PropTypes.shape({}),
  social: PropTypes.arrayOf(PropTypes.shape({})),
  header: PropTypes.shape({}),
  footer: PropTypes.shape({}),
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
  homepage: PropTypes.bool,
};

Layout.defaultProps = {
  preview: false,
  offline: false,
  metadata: null,
  social: null,
  header: null,
  footer: null,
  homepage: false,
};

export default Layout;
