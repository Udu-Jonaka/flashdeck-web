function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Android App
          </div>

          <h1>
            Study smarter.
            <br />
            <span>Remember more.</span>
          </h1>

          <p>
            FlashDeck helps you create, organize, and study flashcards that
            actually stick.
          </p>

          {/* Feature bullets */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              AI-Powered Flashcard Generation
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Spaced Repetition
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Study Anywhere, Anytime
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Easy to Understand
            </div>
          </div>

          {/* Action buttons */}
          <div className="hero-actions">
            <a
              href="https://expo.dev/artifacts/eas/74aGTGUL8dXzHVFoRhDr2T.apk"
              className="hero-download-btn"
            >
              <i
                className="fa-brands fa-android"
                aria-hidden="true"
                suppressHydrationWarning
              ></i>
              <div className="hero-download-text">Download APK</div>
            </a>
            <a href="#changelog" className="hero-changelog-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              View Changelog
            </a>
          </div>

          <div className="hero-secure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Safe &amp; Secure · Scanned by VirusTotal
          </div>
        </div>

        {/* Right: Phone mockup placeholder */}
        <div className="hero-phone">
          <img
            src="/photo.png"
            className="hero-phone-placeholder"
            alt="app display"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
