import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImage } from 'components/services/getImage';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = { image: null };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      getImage(this.props.value)
        .then(response => response.json())
        .then(image => this.setState({ image }));
    }
  }

  render() {
    console.log('this.state.image :>> ', this.state.image);
    // console.log('this.state.image.hits :>> ', this.state.image.hits);
    // console.log('this.state.image.total :>> ', this.state.image.total);
    return (
      <Gallery>
        {this.state.image &&
          this.state.image.hits.map(img => {
            return <ImageGalleryItem image={img} />;
          })}
      </Gallery>
    );
  }
}

export default ImageGallery;
