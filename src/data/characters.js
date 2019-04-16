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

import whiteRabbitCouponCloseButton from '../images/coupons/whiteRabbit-close.png';
import caterpillarCouponCloseButton from '../images/coupons/caterpillar-close.png';
import madHatterCouponCloseButton from '../images/coupons/madHatter-close.png';
import aliceCouponCloseButton from '../images/coupons/alice-close.png';
import cheshireCatCouponCloseButton from '../images/coupons/cheshireCat-close.png';
import queenOfHeartsCouponCloseButton from '../images/coupons/queenOfHearts-close.png';

const characters = [
  {
    id: 0,
    name: 'White Rabbit',
    image: whiteRabbit,
    bonus: '350% Bonus',
    couponCode: '',
    deposit: '',
    couponImage: whiteRabbitCoupon,
    couponCloseButton: whiteRabbitCouponCloseButton,
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
    couponCloseButton: caterpillarCouponCloseButton,
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
    couponCloseButton: madHatterCouponCloseButton,
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
    couponCloseButton: aliceCouponCloseButton,
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
    couponCloseButton: cheshireCatCouponCloseButton,
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
    couponCloseButton: queenOfHeartsCouponCloseButton,
    couponUrl: 'someurl'
  }
];

export default characters;
