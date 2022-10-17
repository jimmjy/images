const url = 'https://dog.ceo/api/breed/maltese/images';
const IMAGE_THRESHOLD = 30;

export const fetchImage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const limitToImages = data.message.slice(0, IMAGE_THRESHOLD);

  return limitToImages;
};
