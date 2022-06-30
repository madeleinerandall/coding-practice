import "./style.css";

function Cards() {
  return (
    <section className="cards gutters">
      <div>
        <ul className="cards-main">
          <li>
            <div className="cards-image">
              <img src="/doughnut1.png" alt="doughnut image" />
            </div>
            <div className="cards-selector-bar">
              <div>
                <h3>Simple JavaScript</h3>
                <p>Click the image or button to view project</p>
              </div>
              <div>
                <button className="cards-button">Click to view project</button>
              </div>
            </div>
          </li>

          <li>
            <div className="cards-image">
              <img src="/fries.png" alt="fries image" />
            </div>
            <div className="cards-selector-bar">
              <div>
                <h3>Contact form</h3>
                <p>Click the image or button to view project</p>
              </div>
              <div>
                <button className="cards-button">Click to view project</button>
              </div>
            </div>
          </li>

          <li>
            <div className="cards-image">
              <img src="/slushie.png" alt="drink image" />
            </div>
            <div className="cards-selector-bar">
              <div>
                <h3>Pulling data from API's</h3>
                <p>Click the image or button to view project</p>
              </div>
              <div>
                <button className="cards-button">Click to view project</button>
              </div>
            </div>
          </li>

          <li>
            <div className="cards-image">
              <img src="/hamburger.png" alt="burger image" />
            </div>
            <div className="cards-selector-bar">
              <div>
                <h3>About the developer</h3>
                <p>Click the image or button to view information</p>
              </div>
              <div>
                <button className="cards-button">Click to view project</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Cards;
