import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { name, image, price, id } = this.props;

    return (
      <div data-testid="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
          onClick={ this.handleClick }
        >
          <p>{name}</p>
          <img src={ image } alt={ name } />
          <p>{price}</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
