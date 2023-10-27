import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./Pages/Links";
import Home from "./Pages/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />}>
          <Route index element={<Home />} />
          <Route path="ProductDetails/:id" element={<ProductDetails/>}/>
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

 