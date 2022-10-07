import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
    };
  }

  handleInputSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="search"
            value={ search }
            onChange={ this.handleInputSearch }
          />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>

    );
  }
}

export default Home;
