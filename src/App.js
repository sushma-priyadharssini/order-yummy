import { useState } from 'react';
import Cart from './components/cart/cart';
import Header from './components/layout/header';
import Meals from './components/meals/meals';
import CartProvider from './store/cartProvider';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const toggleShowCardHandler = (show) => {
    setIsCartShown(show);
  }

  return (
    <CartProvider>
      {isCartShown && <Cart cartHandler={toggleShowCardHandler}/>}
      <Header onShowCartHandler={toggleShowCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
