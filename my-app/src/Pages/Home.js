import React, { useState, useEffect } from "react";
import ProductGrid from "../components/ProductsGrid/ProductsGrid";
import SearchBar from "../components/SearchBar/SearchBar";
const  Home = () => {
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState("");
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log("Error : " + error));
  }, []);
  const handleClick = (id) => {
    console.log(id)
  }
  const changeHandle = (e) => {
    setSearchedProduct(e.target.value)
  }
  return (
    <div className="App">
      <SearchBar id={"search-products-input"} type={"text"} changeHandle={changeHandle} value={searchedProduct} placeholder={"Search Products"} />
      <ProductGrid products={products} query={searchedProduct} handleClick={handleClick} title={"All Products"} />
    </div>
  );
}

export default Home;
