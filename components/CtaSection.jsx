function CtaSection() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-inner">
        {/* Logo placeholder */}
        <div className="cta-logo-area">
          <img
            src="/icon.png"
            alt="FlashDeck Logo"
            className="cta-logo-placeholder"
          />
        </div>

        {/* Text content */}
        <div className="cta-content">
          <span className="cta-label">Built for serious learners.</span>
          <h2>
            Your deck.
            <br />
            Your success.
          </h2>
          <p>
            Join thousands of students who are already studying smarter with
            FlashDeck.
          </p>
        </div>

        {/* Testimonials */}
        <div className="cta-testimonials">
          <div className="testimonial-card">
            <span className="testimonial-quote-mark">&ldquo;&rdquo;</span>
            <p>
              FlashDeck helped me ace my exams. The AI flashcards save me so
              much time!
            </p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                aria-label="Avatar placeholder"
              ></div>
              <div className="testimonial-info">
                <span className="testimonial-name">Karen U.</span>
                <span className="testimonial-role">University Student</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="testimonial-quote-mark">&ldquo;&rdquo;</span>
            <p>This app is a game changer. I actually remember more now!</p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                aria-label="Avatar placeholder"
              ></div>
              <div className="testimonial-info">
                <span className="testimonial-name">Allwell A.</span>
                <span className="testimonial-role">Software Engineer;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
