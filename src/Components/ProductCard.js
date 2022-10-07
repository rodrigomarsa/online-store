import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <div data-testid="product">
        <p>{name}</p>
        <img src={ image } alt={ name } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
