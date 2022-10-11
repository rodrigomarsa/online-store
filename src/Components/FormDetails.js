import React from 'react';
import PropTypes from 'prop-types';

class FormDetails extends Component {
  render() {
    const {
      handleChange,
      onRatingChange,
      onSubmitButtonClick,
      isSubmitButtonDisabled,
    } = this.props;

    return (
      <form>
        <label htmlFor="email">
          email
          <input
            data-testid="product-detail-email"
            type="email"
            id="email"
            onChange={ handleChange }
            name="email"
          />
        </label>
        <label htmlFor="rating-one">
          rating
          <input
            data-testid="1-rating"
            type="radio"
            name="rating"
            id="rating-one"
            value="1"
            onChange={ onRatingChange }
          />
        </label>
        <label htmlFor="rating-two">
          rating
          <input
            data-testid="2-rating"
            type="radio"
            name="rating"
            id="rating-two"
            value="2"
            onChange={ onRatingChange }
          />
        </label>
        <label htmlFor="rating-three">
          rating
          <input
            data-testid="3-rating"
            type="radio"
            name="rating"
            id="rating-three"
            value="3"
            onChange={ onRatingChange }
          />
        </label>
        <label htmlFor="rating-four">
          rating
          <input
            data-testid="4-rating"
            type="radio"
            name="rating"
            id="rating-four"
            value="4"
            onChange={ onRatingChange }
          />
        </label>
        <label htmlFor="rating-five">
          rating
          <input
            data-testid="5-rating"
            type="radio"
            name="rating"
            id="rating-five"
            value="5"
            onChange={ onRatingChange }
          />
        </label>
        <label htmlFor="evaluation">
          evaluation
          <input
            data-testid="product-detail-evaluation"
            type="textarea"
            value="evaluation"
            name="text"
            onChange={ handleChange }
          />
        </label>

        <button
          data-testid="submit-review-btn"
          type="button"
          id="submitButton"
          onClick={ onSubmitButtonClick }
          disabled={ isSubmitButtonDisabled }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

FormDetails.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onSubmitButtonClick: PropTypes.func.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,

};

export default FormDetails;
