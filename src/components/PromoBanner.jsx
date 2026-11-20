import { FiArrowUpRight } from "react-icons/fi";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo-banner" id="about">

      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1614252360204-4552963c9996?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="AUREL timeless fashion collection"
          loading="lazy"
        />
      </div>

      <div className="promo-content">

        <span className="section-eyebrow">
          THE AUREL PHILOSOPHY
        </span>

        <h2>
          Made for the
          <br />
          moments that <em>matter.</em>
        </h2>

        <p>
          We believe great style isn't about having more.
          It's about choosing better. Thoughtfully designed
          essentials that become a part of your everyday story.
        </p>

        <a href="#products" className="promo-cta">
          Discover the collection
          <FiArrowUpRight />
        </a>

      </div>

    </section>
  );
}

export default PromoBanner;