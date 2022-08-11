
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import{Switch, Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Contact from './component/Contact';
import About from './component/About';


function App() {
  return (
   <>
      <Navbar/>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </Switch>
   </>
  );
}

export default App;
