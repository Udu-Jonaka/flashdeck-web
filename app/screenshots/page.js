import screens from "@/data/screenshots";

export const metadata = {
  title: "Screenshots – FlashDeck",
  description:
    "See FlashDeck in action. Browse screenshots of the app's key screens including the home dashboard, deck view, study mode, and more.",
};

export default function ScreenshotsPage() {
  return (
    <section className="screenshots">
      <div className="screenshots-inner">
        {/* Header */}
        <div className="screenshots-header">
          <span className="screenshots-badge">Preview</span>
          <h1>See FlashDeck in action</h1>
          <p>
            Take a closer look at the screens that make studying smarter and
            more enjoyable.
          </p>
        </div>

        {/* Grid */}
        <div className="screenshots-grid">
          {screens.map((screen, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-image-wrapper">
                <img
                  src={screen.image}
                  alt={`${screen.label} screenshot`}
                  className="screenshot-image"
                />
              </div>
              <div className="screenshot-info">
                <h3>{screen.label}</h3>
                <p>{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
