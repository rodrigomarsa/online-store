import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormDetails from '../Components/FormDetails';
import { addToLocalStorage } from '../services/localStorage';
import '../styles/ProductDetails.css';
import carrinho from '../images/carrinho.svg';

class ProductsDetails extends Component {
  constructor() {
    super();
    this.state = ({
      cart: [],
      product: {},
      loading: true,
      review: {
        email: '',
        text: '',
        rating: '',
      },
      reviews: [],
      error: false,
    }
    );
  }

  componentDidMount() {
    if (!localStorage) {
      const cart = getFromLocalStorage();
      this.setState({ cart });
    } else {
      this.getReviews();
      this.getProductById().then((product) => {
        this.setState({
          product,
          loading: false,
        });
      });
    }
  }

  getReviews = () => {
    const { match: { params: { id } } } = this.props;
    const data = JSON.parse(localStorage.getItem(id));
    this.setState({ reviews: data });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;

    this.setState((prev) => ({
      review: {
        ...prev.review,
        [name]: value,
      },
    }));
  };

  onSubmitButtonClick = () => {
    const { review, product } = this.state;

    if (!review.email.includes('@') || !review.rating) {
      this.setState({ error: true });
      return;
    }
    const data = JSON.parse(localStorage.getItem(product.id));
    const data2 = data ? JSON.stringify([...data, review]) : JSON.stringify([review]);
    localStorage.setItem(`${product.id}`, data2);
    this.getReviews();
    this.setState({
      review: {
        email: '', text: '', rating: 0,
      },
      error: false,
    });
  };

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
    const { product, loading, error, review, reviews } = this.state;
    const { title, price, pictures } = product;
    if (loading) return (<p>Carregando</p>);
    return (
      <div className="container_details">
        <Link
          className="cart_details"
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <img src={ carrinho } alt="carrinho de compras" />
        </Link>
        <div className="product_info">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img
            src={ pictures[0].url }
            alt={ `Imagem do ${title}` }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">
            R$
            {' '}
            {price.toFixed(2)}
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleAddCartClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <FormDetails
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          onRatingChange={ this.onRatingChange }
          onSubmitButtonClick={ this.onSubmitButtonClick }
          error={ error }
          review={ review }
        />

        <section className="reviews">
          {
            !Array.isArray(reviews) ? null : reviews.map((item, index) => (
              <div key={ index }>
                <p data-testid="review-card-email">
                  {item.email}
                </p>
                <p data-testid="review-card-rating">
                  Nota:
                  {' '}
                  {item.rating}
                </p>
                <p data-testid="review-card-evaluation">
                  {item.text}
                </p>
              </div>
            ))
          }
        </section>
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
