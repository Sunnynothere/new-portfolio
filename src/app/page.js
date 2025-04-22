

export default function Home() {
  return (
    <main className="portfolio-main">
      <div className="portfolio-header">
        <h1 className="title">PORTFOLIO</h1>
        <div className="title-subtitle-two">
          <h1 className="title">COFFEESE</h1>
          <h2 className="subtitle">WEB DEVELOPER</h2>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="nav-container">
          <span className="close-button"><a>[x]</a></span>

          <div className="nav-links">
            <div className="folders">

              <div className="folder">
                <a>
                  <img />
                </a>
                <span className="nav-text"></span>
              </div>

              <div className="folder">
                <a>
                  <img />
                </a>
                <span className="nav-text"></span>
              </div>

              <div className="folder">
                <a>
                  <img />
                </a>
                <span className="nav-text"></span>
              </div>

              <div className="folder">
                <a>
                  <img />
                </a>
                <span className="nav-text"></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
