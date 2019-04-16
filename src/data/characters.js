import whiteRabbit from '../images/characters/whiteRabbit.png';
import caterpillar from '../images/characters/caterpillar.png';
import madHatter from '../images/characters/madHatter.png';
import alice from '../images/characters/alice.png';
import cheshireCat from '../images/characters/cheshireCat.png';
import queenOfHearts from '../images/characters/queenOfHearts.png';

import whiteRabbitCoupon from '../images/coupons/whiteRabbit.png';
import caterpillarCoupon from '../images/coupons/caterpillar.png';
import madHatterCoupon from '../images/coupons/madHatter.png';
import aliceCoupon from '../images/coupons/alice.png';
import cheshireCatCoupon from '../images/coupons/cheshireCat.png';
import queenOfHeartsCoupon from '../images/coupons/queenOfHearts.png';

const characters = [
  {
    id: 0,
    name: 'White Rabbit',
    image: whiteRabbit,
    bonus: '350% Bonus',
    couponCode: '',
    deposit: '',
    couponImage: whiteRabbitCoupon,
    couponUrl: 'someurl'
  },
  {
    id: 1,
    name: 'Caterpillar',
    image: caterpillar,
    bonus: '250% Bonus',
    couponCode: '',
    deposit: '',
    couponImage: caterpillarCoupon,
    couponUrl: 'someurl'
  },
  {
    id: 2,
    name: 'Mad Hatter',
    image: madHatter,
    bonus: '222% No Rules Bonus',
    couponCode: 'MADHATTER',
    deposit: '$50',
    couponImage: madHatterCoupon,
    couponUrl: 'someurl'
  },
  {
    id: 3,
    name: 'Alice',
    image: alice,
    bonus: '230% Bonus',
    couponCode: '',
    deposit: '',
    couponImage: aliceCoupon,
    couponUrl: 'someurl'
  },
  {
    id: 4,
    name: 'Cheshire Cat',
    image: cheshireCat,
    bonus: '300% Bonus',
    couponCode: '',
    deposit: '',
    couponImage: cheshireCatCoupon,
    couponUrl: 'someurl'
  },
  {
    id: 5,
    name: 'Queen of Hearts',
    image: queenOfHearts,
    bonus: '375 Bonus',
    couponCode: '',
    deposit: '',
    couponImage: queenOfHeartsCoupon,
    couponUrl: 'someurl'
  }
];

export default characters;
