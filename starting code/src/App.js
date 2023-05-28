import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/02-cart-files';
function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
