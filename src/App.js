import { Fragment, useState } from 'react';
import Cart from './components/cart/cart';
import Header from './components/layout/header';
import Meals from './components/meals/meals';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const toggleShowCardHandler = (show) => {
    setIsCartShown(show);
  }

  return (
    <Fragment>
      {isCartShown && <Cart cartHandler={toggleShowCardHandler}/>}
      <Header onShowCartHandler={toggleShowCardHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
