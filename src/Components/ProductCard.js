import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

class ProductCard extends Component {
  render() {
    const { name, image, price, id, handleAddCartClick } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
        >
          <p>{name}</p>
          <img src={ image } alt={ name } />
          <p>
            R$
            {' '}
            {price.toFixed(2)}
          </p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          value={ id }
          onClick={ handleAddCartClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleAddCartClick: PropTypes.func.isRequired,
};

export default ProductCard;
