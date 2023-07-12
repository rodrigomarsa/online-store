import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Components/Products';
import Sidebar from '../Components/Sidebar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { addToLocalStorage } from '../services/localStorage';
import '../styles/Home.css';
import carrinho from '../images/carrinho.svg';
import logo from '../images/logo.svg';
import lupa from '../images/lupa.svg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
      cart: [],
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

  handleAddCartClick = (event) => {
    const { products } = this.state;
    const { value } = event.target;
    const itemsToCart = products.find((product) => product.id === value);
    itemsToCart.quantity = 1;
    this.setState(
      (previous) => ({ cart: [...previous.cart, itemsToCart] }),
      () => {
        const { cart } = this.state;
        addToLocalStorage(cart);
      },
    );
  };

  handleSearchButton = async () => {
    const { search } = this.state;
    const results = await getProductsFromCategoryAndQuery(null, search);
    this.setState({ products: results.results });
  };

  render() {
    const { search, products, cart, quantity } = this.state;

    return (
      <div>
        <div className="header">
          <label htmlFor="search" className="search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Digite o que você busca"
              value={ search }
              onChange={ this.handleInputSearch }
              data-testid="query-input"
            />

            <button
              type="button"
              onClick={ this.handleSearchButton }
              data-testid="query-button"
            >
              <img src={ lupa } alt="lupa" />
            </button>
          </label>

          <img src={ logo } alt="logo" />

          <Link
            className="cart"
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            <img src={ carrinho } alt="carrinho de compras" />
          </Link>
        </div>

        <div className="categories">
          <Sidebar handleCategoryClick={ this.handleCategoryClick } />
        </div>

        {products.length === 0 && (
          <p data-testid="home-initial-message" className="message">
            Digite algum termo de pesquisa ou escolha uma categoria
          </p>
        )}

        <Products
          list={ products }
          handleAddCartClick={ this.handleAddCartClick }
          cart={ cart }
          quantity={ quantity }
        />
      </div>
    );
  }
}

export default Home;
