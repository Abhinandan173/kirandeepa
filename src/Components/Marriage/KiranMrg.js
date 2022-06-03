import React from "react";
import "./KiranMrg.css";
function KiranMrg() {
  return (
    <div>
      <header className="cover">
        <div className="hero-text-wrapper">
          <div className="hero-text">
            <div className="tagline">We're getting married!</div>
            <h1>Kiran &amp; Deepa</h1>
            <span className="date">June 6, 2022</span>
          </div>
        </div>
      </header>
      <main>
        <section className="locations">
          <h2>Locations</h2>
          <div className="blurb">
            <h3>Ceremony</h3>
            <img
              src="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-ceremony.png"
              alt="Ceremony"
            />
            <div>Jain Galli Kudachi(R)</div>
            <div>Old Kannada School</div>
          </div>
          <div className="blurb">
            <h3>Photos</h3>
            <img
              src="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-photoshoot.png"
              alt="Photoshoot"
            />
            <div>Photo == Memomoris</div>
            <div>We love to see you in our album</div>
          </div>
          <div className="blurb">
            <h3>Party</h3>
            <img
              src="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-party.png"
              alt="Party"
            />
            <div>Managanve Nivas</div>
            <div>Jain Galli Kudachi(R)</div>
          </div>
        </section>
        <section className="program">
          <h2>Program</h2>
          <div className="program-wrapper">
            <p style={{ textAlign: "center" }}>
              "lets join us we will together create some beautiful memories"
            </p>
            <ul>
              <li>12:30 – Wedding ceremony</li>
              <li>12:40 – Lunch</li>
              <li>02:00 – Photos</li>
              <li>04:00 – Temple Entry</li>
              <li>05:00 – Home Entry</li>
              <li>07:00 – Haladi Function</li>
            </ul>
          </div>
        </section>
        <section className="gifts">
          <h2>Gifts</h2>
          <p>The greatest gift for us is to have you there.</p>
          <img
            src="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-gifts.png"
            alt="Gifts"
          />
          <p>Please, just bring yourself and have fun with us.</p>
        </section>
        <section className="faq">
          <div className="kannada">ಮದುವೆಯ ಮಮತೆಯ ಕರೆಯೋಲೆ</div>
          <div className="question-group">
            <h3>
              You are officially invited to our wedding, to celebrate the
              meeting of two loving hearts. We would love to see you at the
              ceremony and hear your sincere prayers for our union.
            </h3>
            <p
              className="kannada2"
              style={{
                color: "skyblue",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ಎಲ್ಲರೂ ತಪ್ಪದೆ ಬನ್ನಿ
            </p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>♥️🙏🙏♥️</p>
          </div>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>If you have any questions feel free to call.</p>
          <p>
            Phone: <a href="tel:+36300000000">+91 7829529513</a> (Pavan)
          </p>
        </section>
      </main>
      <div className="invite-card"></div>
      <footer>
        <div className="footer-wrapper">
          <p>
            <small>
              Made with ♥ Kudachi &copy;2022 | Created by
              <a href="http://www.flaticon.com/authors/becris" title="Becris">
                AB
              </a>
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default KiranMrg;
