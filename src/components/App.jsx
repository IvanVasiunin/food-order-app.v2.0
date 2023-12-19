import {UserProgressContextProvider} from 'store/UserProgressContext';
import Header from './Header';
import Meals from './Meals';
import { CartContextProvider } from 'store/CartContext';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
