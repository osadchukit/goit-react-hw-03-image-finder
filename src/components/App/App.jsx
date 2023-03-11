import React, { Component } from 'react';
import { Conteiner } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = { textSearch: '' };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    // console.log('state :>> ', this.state);
    return (
      <Conteiner>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.textSearch} />
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal></Modal> */}
      </Conteiner>
    );
  }
}
