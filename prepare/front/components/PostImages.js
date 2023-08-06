import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  if (images.length === 1) {
    return (
      <>
        <img
          role='presentation'
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role='presentation'
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role='presentation'
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }
  return (
    <div>
      <img
        role='presentation'
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        role='presentation'
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      ></div>
    </div>
  );
};

PostImages.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
