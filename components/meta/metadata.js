import Head from 'next/head';
import PropTypes from 'prop-types';

const { NEXT_PUBLIC_NAME } = process.env;

const Metadata = ({ title, canonical, description, keywords, indexing }) => {
  const pageTitle = title ? `${title} - ${NEXT_PUBLIC_NAME}` : false;
  return (
    <Head>
      <title>{pageTitle || NEXT_PUBLIC_NAME}</title>
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {indexing && <meta name="robots" content={indexing} />}
    </Head>
  );
};

Metadata.propTypes = {
  title: PropTypes.string,
  canonical: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  indexing: PropTypes.string,
};

Metadata.defaultProps = {
  title: null,
  canonical: null,
  description: null,
  keywords: null,
  indexing: null,
};

export default Metadata;
