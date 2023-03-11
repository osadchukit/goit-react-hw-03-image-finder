import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>
        </SearchForm>
      </Header>
    );
  }
}

// export const Searchbar = ({ value }) => {
//   console.log(value);
//   return (
//     <Header>
//       <SearchForm>
//         <SearchFormButton type="submit">
//           <SearchFormLabel>Search</SearchFormLabel>
//         </SearchFormButton>

//         <SearchFormInput
//           type="text"
//           autocomplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </SearchForm>
//     </Header>
//   );
// };
