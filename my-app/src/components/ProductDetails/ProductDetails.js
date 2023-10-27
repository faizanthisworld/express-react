import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css"
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
//   useEffect(() => {
//     fetch("/api/products/")
//       .then((res) => res.json())
//       .then((data) => setProduct(data.products[id - 1]));
//   }, []);

useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="ProductDetails">
      <div className="container">
        <div className="col img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details">
          <h1>{product.title}</h1>
          <hr/>
          
          <p>-{product.discountPercentage}%</p>
          <p>${product.price}</p>
          <p className="oldprice">MPR : ${  Math.floor(product.price / product.discountPercentage) * 100}</p>
          <hr/>
          <p> Brand : {product.brand}</p>
          <p> Rating : {product.rating}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
