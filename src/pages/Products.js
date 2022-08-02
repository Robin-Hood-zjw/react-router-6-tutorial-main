import { Link } from "react-router-dom";

import products from "../data";

const productsArr = products.map((product) => (
  <article key={product.id}>
    <h5>{product.name}</h5>
    <Link to={`/products/${product.id}`}>more info</Link>
  </article>
));

export default () => {
  return (
    <section className="section">
      <div className="products">{productsArr}</div>
    </section>
  );
};
