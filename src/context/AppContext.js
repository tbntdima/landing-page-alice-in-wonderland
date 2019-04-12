import React, { Component, createContext } from 'react';
import characters from '../data/characters';

const AppContext = createContext();

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;

export class AppProvider extends Component {
  state = {
    characters
  };

  render() {
    const characters = this.state.characters;
    return <Provider value={{ characters }}>{this.props.children}</Provider>;
  }
}
