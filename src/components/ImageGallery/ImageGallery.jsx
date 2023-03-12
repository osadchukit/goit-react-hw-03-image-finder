import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImage } from 'components/services/getImage';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ loading: true });
      getImage(this.props.value)
        .then(response => response.json())
        .then(image => this.setState({ image }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    // console.log('this.state.image :>> ', this.state.image);
    // console.log('this.state.image.hits :>> ', this.state.image.hits);
    // console.log('this.state.image.total :>> ', this.state.image.total);
    return (
      <Gallery>
        {this.state.loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {this.state.image &&
          this.state.image.hits.map(img => {
            return <ImageGalleryItem key={img.id} image={img} />;
          })}
      </Gallery>
    );
  }
}

export default ImageGallery;
