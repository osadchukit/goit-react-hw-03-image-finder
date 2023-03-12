import {
  ImageGalleryItemImage,
  ImageGalleryLi,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  // console.log('webformatURL  :>> ', webformatURL);
  return (
    <ImageGalleryLi>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryLi>
  );
};
