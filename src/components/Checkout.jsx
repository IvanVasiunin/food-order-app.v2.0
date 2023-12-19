import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from 'store/CartContext';
import { currencyFromatter } from 'util/formatting';
import Input from './UI/Input';
import UserProgressContext from 'store/UserProgressContext';
import Button from './UI/Button';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout()
  }


  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <form>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFromatter.format(cartTotal)}</p>

        <Input label="Full name" type="text" id="full-name" />
        <Input label="Emaild address" type="email" id="emails" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className='modal-actions'>
          <Button onClick={handleClose} type='button' textOnly>Close</Button>
          <Button>Submit the order</Button>
        </p>
      </form>
    </Modal>
  );
}
