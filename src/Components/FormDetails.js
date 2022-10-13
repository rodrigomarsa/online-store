import PropTypes from 'prop-types';
import React from 'react';

class FormDetails extends React.Component {
  render() {
    const {
      handleChange,
      onSubmitButtonClick,
      error,
      review,
    } = this.props;

    return (
      <>
        <h2>Avaliações</h2>

        {
          error && <p data-testid="error-msg">Campos inválidos</p>
        }

        <form>
          <label htmlFor="email">
            E-mail
            <br />
            <input
              data-testid="product-detail-email"
              type="email"
              id="email"
              value={ review.email }
              onChange={ handleChange }
              name="email"
              placeholder="e-mail"
            />
            <br />
          </label>
          <label htmlFor="rating-one">
            1
            <input
              data-testid="1-rating"
              type="radio"
              name="rating"
              id="rating-one"
              value="1"
              onChange={ handleChange }
            />
            <br />
          </label>
          <label htmlFor="rating-two">
            2
            <input
              data-testid="2-rating"
              type="radio"
              name="rating"
              id="rating-two"
              value="2"
              onChange={ handleChange }
            />
            <br />
          </label>
          <label htmlFor="rating-three">
            3
            <input
              data-testid="3-rating"
              type="radio"
              name="rating"
              id="rating-three"
              value="3"
              onChange={ handleChange }
            />
            <br />
          </label>
          <label htmlFor="rating-four">
            4
            <input
              data-testid="4-rating"
              type="radio"
              name="rating"
              id="rating-four"
              value="4"
              onChange={ handleChange }
            />
            <br />
          </label>
          <label htmlFor="rating-five">
            5
            <input
              data-testid="5-rating"
              type="radio"
              name="rating"
              id="rating-five"
              value="5"
              onChange={ handleChange }
            />
            <br />
          </label>
          <label htmlFor="evaluation">
            Comentários:
            <br />
            <input
              data-testid="product-detail-evaluation"
              type="textarea"
              name="text"
              placeholder="Mensagem (opcional)"
              value={ review.text }
              onChange={ handleChange }
            />
            <br />
          </label>
          <button
            data-testid="submit-review-btn"
            type="button"
            id="submitButton"
            onClick={ onSubmitButtonClick }
          >
            Avaliar
          </button>
        </form>
      </>
    );
  }
}

FormDetails.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmitButtonClick: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  review: PropTypes.shape().isRequired,
};

export default FormDetails;
