import { FiArrowUpRight } from "react-icons/fi";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {product.label && (
          <span className="product-label">
            {product.label}
          </span>
        )}

        <button className="product-quick-view">
          Quick View
          <FiArrowUpRight />
        </button>

      </div>

      {/* Product Information */}
      <div className="product-info">

        <div className="product-info-main">

          <span className="product-category">
            {product.category}
          </span>

          <h3>{product.name}</h3>

          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

        </div>

        <button
          className="product-arrow"
          aria-label={`View ${product.name}`}
        >
          <FiArrowUpRight />
        </button>

      </div>

    </article>
  );
}

export default ProductCard;