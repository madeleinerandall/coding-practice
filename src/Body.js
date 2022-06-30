import "./Body.css";

function Body() {
  return (
    <section className="body gutters">
      <div className="body-content">
        <img className="body-img" src="/phone.png" alt="phone" />
        <div className="content">
          <h3>Contact Madeleine</h3>
          <a href="mailto:mr@floatplane.dev">Click here to compose email</a>
          <p>
            Madeleine Randall has been working as a Junior Front-End Developer
            for Floatplane Dev for the past year. She has designed and built
            apps for clients such as{" "}
            <span>
              <a href="https://www.randallandassoc.com">
                Randall and Associates©
              </a>
            </span>{" "}
            as well as this website you are currently viewing!
          </p>
        </div>
      </div>

      <div className="body-arrow">
        <img id="body-arrow" src="/body-arrow.png" alt="left pointing arrow" />
      </div>

      <div id="body-second-content-section">
        <img
          id="second-image"
          className="body-img"
          src="/globe.png"
          alt="globe"
        />
        <div className="content content2">
          <h3 id="second-h3">Contact Madeleine</h3>
          <a href="mailto:mr@floatplane.dev">Click here to compose email</a>
          <p>
            Madeleine Randall has been working as a Junior Front-End Developer
            for Floatplane Dev for the past year. She has designed and built
            apps for clients such as{" "}
            <span>
              <a href="https://www.randallandassoc.com">
                Randall and Associates©
              </a>
            </span>{" "}
            as well as this website you are currently viewing!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Body;
