import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} total={getTotal()} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ProductList from './components/ProductList/ProductList';
// import ProductDetails from './components/ProductDetails/ProductDetails';
// import Cart from './components/Cart/Cart';
// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemExists = prevItems.find((item) => item.id === product.id);
//       if (itemExists) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const getTotal = () =>
//     cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route
//             path="/"
//             element={<ProductList addToCart={addToCart} />}
//           />
//           <Route
//             path="/product/:id"
//             element={<ProductDetails addToCart={addToCart} />}
//           />
//           <Route
//             path="/cart"
//             element={<Cart cartItems={cartItems} total={getTotal()} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


