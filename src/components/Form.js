import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo, teste
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      saveButton,
    } = this.props;

    return (
      <>
        <input
          name="cardName"
          id="cardName"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <textarea
          name="cardDescription"
          id="cardDescription"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <input
          name="cardAttr1"
          id="cardAttr1"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <input
          name="cardAttr2"
          id="cardAttr2"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <input
          name="cardAttr3"
          id="cardAttr3"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <input
          name="cardImage"
          id="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        />

        <select
          name="cardRare"
          id="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          onKeyUp={ saveButton }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <input
          name="cardTrunfo"
          id="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          name="isSaveButtonDisabled"
          id="isSaveButtonDisabled"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  saveButton: PropTypes.func.isRequired,
};
