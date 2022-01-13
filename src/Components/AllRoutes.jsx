import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProductsDetails } from "./ProductDetails";
import { Products } from "./Products";
export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<ProductsDetails />}></Route>
    </Routes>
  );
}
