import React, { useState, useEffect } from 'react';

// components
import ImageViewer from './components/ImageViewer';

// constants
import { HOME_PAGE_TITLE } from './locale/homePageText';

// utils
import { fetchImage } from './utils/fetchImages';

// styles
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let canFetch = true;

    fetchImage()
      .then((data) => {
        const hasImages = data.length > 0;

        if (hasImages && canFetch) {
          setImages(data);
        }
      })
      .catch((err) => console.error(err));

    return () => (canFetch = false);
  }, []);

  return (
    <div className="App">
      <p>{HOME_PAGE_TITLE}</p>
      <ImageViewer images={images} />
    </div>
  );
}

export default App;
