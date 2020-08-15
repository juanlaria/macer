import { useEffect, useState } from 'react';
import Error from 'next/error';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Render from '../components/render';

const Page = ({ doc, homepage, header, footer, preview }) => {
  const [offline, setOffline] = useState(false);

  if (doc.data) {
    // Props
    const {
      metadata_canonical,
      metadata_description,
      metadata_indexing,
      metadata_keywords,
      metadata_title,
      social,
      body,
    } = doc.data;

    // Metadata
    const metadata = {
      canonical: metadata_canonical,
      description: metadata_description,
      indexing: metadata_indexing,
      keywords: metadata_keywords,
      title: metadata_title,
    };

    useEffect(() => {
      const handleNetworkChange = e => {
        setOffline(!navigator.onLine);
      };
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
    }, []);

    return (
      <Layout
        header={header}
        footer={footer}
        preview={preview}
        homepage={homepage}
        offline={offline}
        metadata={metadata}
        social={social}
      >
        {body.map((element, index) => {
          return (
            <Render
              data={element}
              key={`render-${element.slice_type}-${index}`}
            />
          );
        })}
      </Layout>
    );
  } else {
    return <Error statusCode={204} />;
  }
};

Page.propTypes = {
  doc: PropTypes.shape({}).isRequired,
  header: PropTypes.shape({}),
  footer: PropTypes.shape({}),
  preview: PropTypes.bool,
  homepage: PropTypes.bool,
};

Page.defaultProps = {
  header: null,
  footer: null,
  preview: false,
  homepage: false,
};

export default Page;
