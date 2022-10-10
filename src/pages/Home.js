import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Components/Products';
import Sidebar from '../Components/Siderbar';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
    };
  }

  handleCategoryClick = async (id) => {
    const results = await getProductsFromCategoryAndQuery(id);
    this.setState({ products: results.results });
  };

  handleInputSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSearchButton = async () => {
    const { search } = this.state;
    const results = await getProductsFromCategoryAndQuery(null, search);
    this.setState({ products: results.results });
  };

  render() {
    const { search, products } = this.state;

    return (
      <div>
        <Sidebar handleCategoryClick={ this.handleCategoryClick } />
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
