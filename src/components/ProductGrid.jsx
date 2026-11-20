import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const categories = [
  "All",
  "Shirts",
  "T-Shirts",
  "Trousers",
  "Outerwear",
];

function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Decide how many products to display
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 12);

  return (
    <section className="product-section" id="products">

      {/* Section Header */}
      <div className="product-section-header">
        <div>
          <span className="section-eyebrow">
            CURATED FOR YOU
          </span>

          <h2>
            The <em>essentials.</em>
          </h2>
        </div>

        <p>
          Pieces you'll reach for,
          season after season.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="product-toolbar">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-search">
          <FiSearch />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowAll(false);
            }}
          />
        </div>
      </div>

      {/* Product Grid */}
      {displayedProducts.length > 0 ? (
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h3>No products found</h3>
          <p>Try searching for something else.</p>
        </div>
      )}

      {/* View All / Show Less */}
      {filteredProducts.length > 12 && (
        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      )}

      {/* Product Count */}
      <div className="product-count">
        Showing {displayedProducts.length} of {filteredProducts.length} products
      </div>

    </section>
  );
}

export default ProductGrid;