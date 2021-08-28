import { Fragment } from 'react';
import Header from './components/layout/header';
import Meals from './components/meals/meals';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
