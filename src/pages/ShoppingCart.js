import React from 'react';
import { getFromLocalStorage } from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = ({
      cart: [],
    });
  }

  componentDidMount() {
    this.getSavedProducts();
  }

  getSavedProducts = () => {
    const products = getFromLocalStorage();
    this.setState({ cart: products });
  };

  render() {
    const { cart } = this.state;

    if (!cart) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        {
          cart.map((item, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.price}</p>
              <p data-testid="shopping-cart-product-quantity">
                1
              </p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ShoppingCart;
