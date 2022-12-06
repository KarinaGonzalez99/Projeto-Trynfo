import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// bora codar

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  saveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const one = Number(cardAttr1);
    const two = Number(cardAttr2);
    const tres = Number(cardAttr3);
    const noventa = 90;
    const duzendoedez = 210;

    if (cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== ''
    && cardAttr1 < noventa && cardAttr1 > 0
    && cardAttr2 < noventa && cardAttr2 > 0
    && cardAttr3 < noventa && cardAttr3 > 0
    && (one + two + tres) < duzendoedez) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.saveButton);
  };

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
