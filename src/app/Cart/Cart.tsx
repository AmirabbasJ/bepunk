import { BeerDetail } from '../Beer';
import { CartLayout } from './CartLayout';

export const Cart = () => {
  return (
    <CartLayout>
      <BeerDetail id={1} />
      <BeerDetail id={2} />
      <BeerDetail id={3} />
    </CartLayout>
  );
};
