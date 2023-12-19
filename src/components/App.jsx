import {UserProgressContextProvider} from 'store/UserProgressContext';
import Header from './Header';
import Meals from './Meals';
import { CartContextProvider } from 'store/CartContext';
import Cart from './Cart';

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
