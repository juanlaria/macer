import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSingleDocData } from '../utils/api';
import { Container } from '../shared/styles';
import Header from '../components/cms/header';
import Footer from '../components/cms/footer';

function Error({ statusCode, header, footer }) {
  const router = useRouter();
  let errorMessage;
  switch (statusCode) {
    case 404:
      errorMessage = 'No encontramos lo que buscabas';
      break;

    default:
      errorMessage = 'Algo salió mal';
      break;
  }

  return (
    <>
      {header && <Header {...header.data} />}
      <div id="page" className="-error-page">
        <section className="back-section">
          <Container>
            <button type="button" onClick={() => router.back()}>
              Volver
            </button>
          </Container>
        </section>
        <main id="main">
          {statusCode && <small>{statusCode}</small>}
          {errorMessage && <h1>{errorMessage}</h1>}
          <Link href="/" as="/">
            <a className="button">Volver al inicio</a>
          </Link>
        </main>
      </div>
      {footer && <Footer {...footer.data} />}
    </>
  );
}

Error.getInitialProps = async ({ req, res, err, previewData }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const header = await getSingleDocData(req, 'header', previewData);
  const footer = await getSingleDocData(req, 'footer', previewData);

  return { statusCode, header: header || null, footer: footer || null };
};

export default Error;
