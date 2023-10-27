import Product from "../Product/Product";
import "./ProductsGrid.css"
const ProductGrid = ({ products, query, handleClick }) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div className="ProductsGrid">
      <h3 className="products-title">
        {filteredProducts.length === 0
          ? "No Products Found!"
          : filteredProducts.length + " Products"}
      </h3>
      <div className="container">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
