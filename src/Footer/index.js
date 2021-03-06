import "./style.scss";
import { useState } from "react";

function Footer() {
  const [shape, setShape] = useState(false);

  function handleShape() {
    setShape(!shape);
    console.log("true");
  }

  function handleClick() {
    const shape3 = document.querySelector(".shape3");
    shape3.classList.toggle("spin");
  }

  return (
    <footer>
      <div className="shape-position gutters">
        <img onClick={handleShape} src="../shape2.png" alt="shape2" />

        {shape ? (
          <img
            onClick={handleClick}
            className="shape3"
            src="../shape3.png"
            alt="shape3"
          />
        ) : (
          ""
        )}
      </div>
      <section className="footer gutters">
        <div id="left">
          <h4>
            Madeleine Randall <span>-</span>
          </h4>
          <h4>Profolio Website: a demonstration of coding skills</h4>
          <h4>Code for the future ~</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            nostrum non ex fuga repudiandae vitae, quaerat obcaecati rem
            corporis qui quidem quae saepe, dolorem ullam veritatis blanditiis!
            Quos, alias expedita.
          </p>
          <nav>
            <a href="https://www.instagram.com/maddierandall/">
              <img src="../instagram-colour.png" alt="insta" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="../facebook-colour.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img src="../twitter-colour.png" alt="twitter" />
            </a>
          </nav>
        </div>
        <div id="right">
          <h3>
            Stay in the loop <span>-</span>
          </h3>
          <p>Sign up for all your MDR news and updates.</p>
          <div className="input-group">
            <input
              type="email"
              placeholder="What's your email?"
              autocomplete="email"
            />
            <select name="state" required>
              <option value="">NSW</option>
              <option value="VIC">VIC</option>
              <option value="QLD">QLD</option>
              <option value="ACT">ACT</option>
              <option value="TAS">TAS</option>
              <option value="SA">SA</option>
              <option value="WA">WA</option>
            </select>
            <button>
              <img src="../airplane.png" alt="plane" />
            </button>
          </div>
        </div>
      </section>
      <section className="copyright gutters">
        <div id="copyright">
          <ul>
            <li>Copyright ?? 2022, Madeleine Randall. All rights reserved.</li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Code of Conduct</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
