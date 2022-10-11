import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { name, image, price, id, handleAddCartClick } = this.props;

    return (
      <div data-testid="product">
        <p>{name}</p>
        <img src={ image } alt={ name } />
        <p>{price}</p>
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
