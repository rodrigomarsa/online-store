import React from 'react';
import { getFromLocalStorage, addToLocalStorage } from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = ({
      empty: false,
      products: [],
    });
  }

  componentDidMount() {
    this.getSavedProducts();
  }

  getSavedProducts = () => {
    const products = getFromLocalStorage();
    this.setState({ products, empty: !products });
  };

  /**
   * Função que aumenta a quantidade do produto no carrinho
   * @param {Object} product - Objeto contendo as informações do produto
   */
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    // product.quantity += 1;
    // const cart = [...products];
    // this.setState({ products: cart });
    this.setState({ products: products.map((item) => {
      if (item.title === product.title) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }) });
  };

  /**
   * Função que diminui a quantidade do produto no carrinho
   * @param {Object} product - Objeto contendo as informações do produto
   */
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    this.setState({ products: products.map((item) => {
      if (item.title === product.title) {
        return { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 };
      }
      return item;
    }) });
  };

  /**
   * Função que remove o produto do carrinho
   * @param {Object} product - Objeto contendo as informações do produto
   */
  handleRemoveProduct = (product) => {
    const { products } = this.state;
    this.setState(
      { products: products.filter((item) => item.title !== product.title) },
      () => addToLocalStorage(products),
    );
  };

  render() {
    const { empty, products } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {
          empty ? 'Seu carrinho está vazio' : products
            .map((product, index) => (
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">{product.title}</p>
                <p>{product.price}</p>
                <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
                <div>
                  <button
                    type="button"
                    onClick={ () => this.handleIncreaseQuantity(product) }
                    data-testid="product-increase-quantity"
                  >
                    +

                  </button>
                  <button
                    type="button"
                    onClick={ () => this.handleDecreaseQuantity(product) }
                    data-testid="product-decrease-quantity"
                  >
                    -

                  </button>
                  <button
                    type="button"
                    onClick={ () => this.handleRemoveProduct(product) }
                    data-testid="remove-product"
                  >
                    x

                  </button>
                </div>
                <br />
              </div>
            ))
        }
      </div>
    );
  }
}

export default ShoppingCart;
