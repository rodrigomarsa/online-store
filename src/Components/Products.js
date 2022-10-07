import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends Component {
  render() {
    const { list } = this.props;

    if (list.length === 0) return <p>Nenhum produto foi encontrado</p>;

    return (
      <div>
        {
          list.map((product) => (
            <ProductCard
              key={ product.id }
              image={ product.thumbnail }
              name={ product.title }
              price={ product.price }
            />
          ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

export default Products;
