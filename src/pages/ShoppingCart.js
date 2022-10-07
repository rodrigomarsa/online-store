import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = ({
      empty: true,
    });
  }

  render() {
    const { empty } = this.state;
    return (
      <p data-testid="shopping-cart-empty-message">
        {
          empty ? 'Seu carrinho está vazio' : null
        }
      </p>
    );
  }
}

export default ShoppingCart;
