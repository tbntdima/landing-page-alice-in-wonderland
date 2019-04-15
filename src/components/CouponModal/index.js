// Dependecies
import React from 'react';
import { Modal } from 'react-bootstrap';

// Context
import { Consumer } from '../../context/AppContext';

// Styles
import './index.scss';

class CouponModal extends React.Component {
  render() {
    return (
      <Consumer>
        {({ characters }) => {
          const character = characters.list[characters.currentCharacterId];
          return (
            <Modal {...this.props} size="lg" centered>
              <h1 className="text-white">{character.name}</h1>
              <h1 className="text-white">{character.bonus}</h1>
              <h1 className="text-white">{character.couponCode}</h1>
              <h1 className="text-white">{character.deposit}</h1>
            </Modal>
          );
        }}
      </Consumer>
    );
  }
}

export default CouponModal;
