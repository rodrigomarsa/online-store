import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormDetails from '../Components/FormDetails';

class ProductsDetails extends Component {
  constructor() {
    super();
    this.state = ({
      product: {},
      loading: true,
      review: {
        email: '',
        text: '',
        rating: '',
        isSubmitButtonDisabled: true,
      },
    }
    );
  }

  componentDidMount() {
    this.getProductById().then((product) => {
      this.setState({
        product,
        loading: false,
      });
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState((prev) => ({
      review: {
        ...prev.review,
        [name]: value,
      },
    }));
  }

  onRatingChange(event) {
    const { target } = event;
    const { value } = target;

    console.log(value);
    this.setState({
    //  rating: { }
    });
  }

  getProductById = async () => {
    const { match } = this.props;
    const { params } = match;
    const url = `https://api.mercadolibre.com/items/${params.id}`;
    const request = await fetch(url);
    const response = await request.json();
    return response;
  };

  render() {
    const { product, loading } = this.state;
    const { title, price, pictures } = product;
    if (loading) return (<div />);
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img
          src={ pictures[0].url }
          alt={ `Imagem do ${title}` }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{price}</p>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <FormDetails
          handleChange={ this.handleChange }
          onRatingChange={ this.onRatingChange }
          onSubmitButtonClick={ this.onSubmitButtonClick }
          isSubmitButtonDisabled={ this.isSubmitButtonDisabled }
        />
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
