import React from 'react';

// styles
import './imageViewer.css';

const ImageViewer = ({ images }) => {
  const hasImages = images.length > 0;

  if (!hasImages) {
    return null;
  }

  return (
    <div className="Viewer-wrapper">
      {images.map((image) => (
        <img className="img" key={image} alt="dog" data-testid="image-element" src={image} />
      ))}
    </div>
  );
};

export default ImageViewer;
