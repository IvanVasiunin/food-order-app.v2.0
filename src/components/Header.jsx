import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from 'store/CartContext';
import UserProgressContext from 'store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((sum, item) => item.quantity + sum, 0);

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="A restaurant" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
