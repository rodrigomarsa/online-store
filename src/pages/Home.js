import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Siderbar';

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
        <Sidebar />
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
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
      </div>

    );
  }
}

export default Home;
