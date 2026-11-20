import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">

      <div className="newsletter-content">

        <span className="section-eyebrow">
          STAY IN THE LOOP
        </span>

        <h2>
          A little more <em>AUREL.</em>
        </h2>

        <p>
          Join our community for new collections,
          thoughtful inspiration, and exclusive updates.
        </p>

        {submitted ? (
          <div className="newsletter-success">
            Thank you for joining AUREL.
          </div>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" aria-label="Subscribe">
              <FiArrowUpRight />
            </button>
          </form>
        )}

        <span className="newsletter-note">
          By subscribing, you agree to receive updates from AUREL.
        </span>

      </div>

    </section>
  );
}

export default Newsletter;