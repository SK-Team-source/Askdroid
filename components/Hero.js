import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="hero">
      <iframe
        className="hero__globe"
        src="/AskDroid%20Signal%20Globe.html?overlay=0"
        title="Askdroid signal globe"
        loading="eager"
        aria-hidden="true"
        tabIndex="-1"
      />
      <div className="hero__network" aria-hidden="true">
        <span className="hero__node hero__node--one" />
        <span className="hero__node hero__node--two" />
        <span className="hero__node hero__node--three" />
        <span className="hero__node hero__node--four" />
      </div>
      <div className="container">
        <div className="hero__grid">
          <div className="reveal">
            <p className="hero__kicker">AI &amp; Robotics Directory / Connected intelligence</p>
            <h1>
              Navigate the future: <em>AI insights</em> today
            </h1>
            <p className="hero__lede">
              Explore our AI and robotics solutions by category — a searchable directory connecting
              engineers, investors and innovators with the companies shaping intelligent automation.
            </p>
            <div className="hero__actions">
              <a href="#directory" className="btn btn-primary">
                Explore the directory
              </a>
              <a href="#news" className="btn btn-outline">
                Latest news
              </a>
            </div>

            <SearchBar defaultType="robotics" />
          </div>
        </div>
      </div>
    </section>
  );
}
