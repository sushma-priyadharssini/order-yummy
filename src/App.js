import { Fragment } from 'react';
import Cart from './components/cart/cart';
import Header from './components/layout/header';
import Meals from './components/meals/meals';


function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
