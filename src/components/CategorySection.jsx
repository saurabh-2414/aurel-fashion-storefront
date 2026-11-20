import { FiArrowUpRight } from "react-icons/fi";
import "./CategorySection.css";

const categories = [
  {
    id: 1,
    name: "Shirts",
    description: "Refined everyday essentials",
    image:
     "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "T-Shirts",
    description: "Comfort in every detail",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Trousers",
    description: "Made for effortless movement",
    image:
      "https://plus.unsplash.com/premium_photo-1690366911138-bd50985e0379?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Outerwear",
    description: "Layers that define your style",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  },
];

function CategorySection() {
  return (
    <section className="category-section" id="categories">

      {/* Section Header */}
      <div className="category-header">

        <div>
          <span className="section-eyebrow">
            EXPLORE AUREL
          </span>

          <h2>
            Find your <em>form.</em>
          </h2>
        </div>

        <p className="category-header-description">
          Thoughtfully designed pieces for every
          part of your everyday wardrobe.
        </p>

      </div>

      {/* Category Grid */}
      <div className="category-grid">

        {categories.map((category) => (
          <a
            href="#products"
            className="category-card"
            key={category.id}
          >

            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay"></div>
            </div>

            <div className="category-card-content">

              <div>
                <h3>{category.name}</h3>

                <p>{category.description}</p>
              </div>

              <span className="category-arrow">
                <FiArrowUpRight />
              </span>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;