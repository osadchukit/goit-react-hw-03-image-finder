import {
  ImageGalleryItemImage,
  ImageGalleryLi,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  // console.log('image :>> ', image);
  return (
    <ImageGalleryLi>
      <ImageGalleryItemImage src={image.total.pageURL} alt="" />
    </ImageGalleryLi>
  );
};
