import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromLocalStorage, addToLocalStorage } from '../services/localStorage';

class ProductsDetails extends Component {
  constructor() {
    super();
    this.state = ({
      product: {},
      loading: true,
      cart: [],
    });
  }

  componentDidMount() {
    if (!localStorage) {
      const cart = getFromLocalStorage();
      this.setState({ cart });
    } else {
      this.getProductById().then((product) => {
        this.setState({
          product,
          loading: false,
        });
      });
    }
  }

  handleAddCartClick = () => {
    const { product } = this.state;
    product.quantity = 1;
    this.setState(
      (prev) => ({ cart: [...prev.cart, product] }),
      () => {
        const { cart } = this.state;
        addToLocalStorage(cart);
      },
    );
  };

  getProductById = async () => {
    const { match } = this.props;
    const { params } = match;
    const url = `https://api.mercadolibre.com/items/${params.id}`;
    const request = await fetch(url);
    const response = await request.json();
    return response;
  };

  render() {
    const { product, loading } = this.state;
    const { title, price, pictures } = product;
    if (loading) return (<p>Carregando</p>);
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img
          src={ pictures[0].url }
          alt={ `Imagem do ${title}` }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{price}</p>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleAddCartClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ProductsDetails;
