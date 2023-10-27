import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Link to={`/ProductDetails/${product.id}`}>
      <div className="Product">
        <div className="container">
          <div className="img">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="details">
            <h2 className="title">{product.title}</h2>
            <p className="desc">{product.description}</p>
            <h4 className="price">${product.price}</h4>
          </div>
          <span className="discountpercentage">
            {product.discountPercentage}%
          </span>
        </div>
      </div>
    </Link>
  );
};
export default Product;
