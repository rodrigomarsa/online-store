import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Sidebar from '../Components/Siderbar';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
    };
  }

  handleInputSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  getProductsFromAPI = async () => {
    const { search } = this.state;
    const res = await getProductsFromCategoryAndQuery(null, search);
    return res;
  };

  handleSearchButton = async () => {
    const results = await this.getProductsFromAPI();
    this.setState({ products: results.results });
  };

  render() {
    const { search, products } = this.state;

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
            data-testid="query-input"
          />

          <button
            type="button"
            onClick={ this.handleSearchButton }
            data-testid="query-button"
          >
            Pesquisar

          </button>
        </label>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Products list={ products } />

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
