import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/Products.css';

class Products extends Component {
  render() {
    const { list, handleAddCartClick } = this.props;

    if (list.length === 0) {
      return (
        <p className="not_search">Nenhum produto foi encontrado</p>
      );
    }

    return (
      <div className="products">
        {
          list.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              image={ product.thumbnail }
              name={ product.title }
              price={ product.price }
              handleAddCartClick={ handleAddCartClick }
            />
          ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  handleAddCartClick: PropTypes.func.isRequired,
};

export default Products;
