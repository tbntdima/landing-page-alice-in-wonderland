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

const casinoUrl = 'https://www.silveroakcasino.com/';

const characters = [
  {
    id: 0,
    name: 'White Rabbit',
    image: whiteRabbit,
    couponCode: 'WHITERABBIT',
    couponImage: whiteRabbitCoupon,
    couponCloseButton: whiteRabbitCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=WHITERABBIT`
  },
  {
    id: 1,
    name: 'Caterpillar',
    image: caterpillar,
    couponCode: 'CATERPILLAR',
    couponImage: caterpillarCoupon,
    couponCloseButton: caterpillarCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=CATERPILLAR`
  },
  {
    id: 2,
    name: 'Mad Hatter',
    image: madHatter,
    couponCode: 'MADHATTER',
    couponImage: madHatterCoupon,
    couponCloseButton: madHatterCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=MADHATTER`
  },
  {
    id: 3,
    name: 'Alice',
    image: alice,
    couponCode: 'ALICE',
    couponImage: aliceCoupon,
    couponCloseButton: aliceCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=ALICE`
  },
  {
    id: 4,
    name: 'Cheshire Cat',
    image: cheshireCat,
    couponCode: 'CHESHIRECAT',
    couponImage: cheshireCatCoupon,
    couponCloseButton: cheshireCatCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=CHESHIRECAT`
  },
  {
    id: 5,
    name: 'Queen of Hearts',
    image: queenOfHearts,
    couponCode: 'HEARTS375',
    couponImage: queenOfHeartsCoupon,
    couponCloseButton: queenOfHeartsCouponCloseButton,
    couponUrl: `${casinoUrl}?cashier&coupon=HEARTS375`
  }
];

export default characters;
