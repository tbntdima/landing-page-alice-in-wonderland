import whiteRabbit from '../images/characters/whiteRabbit.png';
import caterpillar from '../images/characters/caterpillar.png';
import madHatter from '../images/characters/madHatter.png';
import alice from '../images/characters/alice.png';
import cheshireCat from '../images/characters/cheshireCat.png';
import queenOfHearts from '../images/characters/queenOfHearts.png';

const characters = [
  {
    id: 0,
    name: 'White Rabbit',
    image: whiteRabbit,
    bonus: '350% Bonus',
    couponCode: '',
    deposit: ''
  },
  {
    id: 1,
    name: 'Caterpillar',
    image: caterpillar,
    bonus: '250% Bonus',
    couponCode: '',
    deposit: ''
  },
  {
    id: 2,
    name: 'Mad Hatter',
    image: madHatter,
    bonus: '222% No Rules Bonus',
    couponCode: 'MADHATTER',
    deposit: '$50'
  },
  {
    id: 3,
    name: 'Alice',
    image: alice,
    bonus: '',
    couponCode: '',
    deposit: ''
  },
  {
    id: 4,
    name: 'Cheshire Cat',
    image: cheshireCat,
    bonus: '300% Bonus',
    couponCode: '',
    deposit: ''
  },
  {
    id: 5,
    name: 'Queen of Hearts',
    image: queenOfHearts,
    bonus: '375 Bonus',
    couponCode: '',
    deposit: ''
  }
];

export default characters;
