import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Buy from "./Components/Buy";
import Slider from "./Components/Slider";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Products />
            </>
          }
        ></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/:productIDy" element={<ProductDetails />} />
        <Route path="/Buy" element={<Buy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
