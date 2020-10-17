import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

// DOCS: https://docs.imgix.com/apis/url/size

const Image = ({ data, fit, width, height, loading, className }) => {
  const { dimensions, url, alt, bigger } = data;

  const [loaded, setLoaded] = useState(true);
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '220px 0px',
  });
  const ready = inView || supportsLazyLoading;

  useEffect(() => {
    // Setting loaded to true once, when it's appears in the viewport.
    if (ready) {
      setLoaded(false);
    }
  }, [ready]);

  const img = {
    width: width || dimensions?.width || false,
    height: height || dimensions?.height || false,
  };

  if(url && url.includes('.svg')) {
    return (
      <picture className={className}>
        <img
          src={url}
          alt={alt || ''}
          width={img.width}
          height={img.height}
          loading={loading}
        />
      </picture>
    );
  }

  // The first render will try to load a bad quality image blurred. Then, when in view, it will load the best
  // quality and display it as soon is ready.
  let resizedUrl = url;
  if (width) {
    resizedUrl += `&w=${ready ? width : (width / 10).toFixed(0)}`;
  }
  if (height) {
    resizedUrl += `&h=${ready ? height : (height / 10).toFixed(0)}`;
  }
  if (ready) {
    if (fit) {
      resizedUrl += `&fit=${fit}`;
    }
    resizedUrl += '&q=100';
    resizedUrl += '&blur=0';
  } else {
    resizedUrl += '&q=10';
    resizedUrl += '&blur=200';
  }

  return (
    <picture ref={!supportsLazyLoading ? ref : undefined} className={className}>
      {bigger && <source srcSet={bigger.url} media="(min-width: 600px)" />}
      <img
        src={resizedUrl}
        alt={alt || ''}
        width={img.width}
        height={img.height}
        loading={loading}
      />
    </picture>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    url: PropTypes.string,
    alt: PropTypes.string,
    bigger: PropTypes.shape({}),
  }).isRequired,
  loading: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  loading: 'auto',
  className: null,
};

export default Image;
