import React, { Component, createContext } from 'react';
import characters from '../data/characters';

const AppContext = createContext();

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;

export class AppProvider extends Component {
  state = {
    characters: {
      list: characters,
      showSingleCharacter: false,
      currentCharacterId: 0
    },
    terms: {
      visible: false
    }
  };

  showSingleCharacter = (id = 0) => {
    this.setState({
      characters: {
        ...this.state.characters,
        showSingleCharacter: true,
        currentCharacterId: id
      }
    });
  };

  hideSingleCharacter = () => {
    this.setState({
      characters: {
        ...this.state.characters,
        showSingleCharacter: false
      }
    });
  };

  toggleTerms = () => {
    this.setState({
      terms: {
        ...this.state.terms,
        visible: !this.state.terms.visible
      }
    });
  };

  render() {
    const characters = {
      ...this.state.characters,
      actions: {
        showSingleCharacter: this.showSingleCharacter,
        hideSingleCharacter: this.hideSingleCharacter
      }
    };
    const terms = {
      ...this.state.terms,
      actions: {
        toggleTerms: this.toggleTerms
      }
    };
    return (
      <Provider value={{ characters, terms }}>{this.props.children}</Provider>
    );
  }
}
