import React from 'react';
import Calculator from "./Calculator";
import Homepage from "./Homepage"
import FilterableProductTable from "./Store"
import Game from "./Tic-tac-toe"
import Darts from './Darts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', made: '2021-02-01'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', made: '2021-01-01'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', made: '2020-02-01'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', made: '2019-02-01'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', made: '2021-02-13'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', made: '2021-02-10'}
];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/calculator" component={Calculator}/>
        <Route path="/store" component={() => <FilterableProductTable products={PRODUCTS} />}/>
        <Route path="/game" component={Game}/>
        <Route path="/darts" component={Darts}/>
      </Switch>
    </Router>
  );
}

export default App;
