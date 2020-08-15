import PropTypes from 'prop-types';

// DOCS: https://docs.imgix.com/apis/url/size

const Image = ({ data, fit, width, height, loading, className }) => {
  const { dimensions, url, alt, bigger } = data;

  const img = {
    width: width || dimensions.width || false,
    height: height || dimensions.height || false
  };

  let resizedUrl = url;
  if (fit) {
    resizedUrl += `&fit=${fit}`
  }
  if (width) {
    resizedUrl += `&w=${width}`
  }
  if (height) {
    resizedUrl += `&h=${height}`
  }

  return (
    <picture className={className}>
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
