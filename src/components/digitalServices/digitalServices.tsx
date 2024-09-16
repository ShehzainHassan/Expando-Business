import Divider from "../divider/divider";
import classes from "./digitalServices.module.css";

export default function DigitalServices() {
  return (
    <div id="services-2" className={classes.digitalServices}>
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <img src="/img/digitalServices.jpg" alt="handshake" />
        </div>
        <div className={classes.rightColumn}>
          <h1>Our Digital Services</h1>
          <p>
            We have tailored services, from digital to <br /> supply chain and
            store managing.
          </p>
          <ul>
            <li className={classes.listItem}>
              <img
                src="/img/list-img.svg"
                alt="list-img"
                className={classes.icon}
              />
              Website and E-commerce Store Setup
            </li>
            <li className={classes.listItem}>
              <img
                src="/img/list-img.svg"
                alt="list-img"
                className={classes.icon}
              />
              Digital Marketing and SEO Services
            </li>
            <li className={classes.listItem}>
              <img
                src="/img/list-img.svg"
                alt="list-img"
                className={classes.icon}
              />
              Analytics and Performance Monitoring
            </li>
            <li className={classes.listItem}>
              <img
                src="/img/list-img.svg"
                alt="list-img"
                className={classes.icon}
              />
              App Development and Launch
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className={classes.container2}>
        <h1>HOW TO GROW OR START YOUR BUSINESS IN THE USA</h1>
        <div className={classes.businessStrategies}>
          <div className={classes.subContainer}>
            <img
              className={classes.strategyIcon}
              src="/img/phoneImg.svg"
              alt="phone"
              width="94px"
            />
            <p className={classes.strategyTitle}>Consultation</p>
            <p className={classes.strategyText}>
              We start with a deep dive into your business to understand your
              needs, goals, and challenges.
            </p>
          </div>

          <div className={classes.subContainer}>
            <img
              className={classes.strategyIcon}
              src="/img/docIcon.svg"
              alt="doc"
              width="70px"
            />
            <p className={classes.strategyTitle}>Strategy Development</p>
            <p className={classes.strategyText}>
              We develop a customized market entry strategy that aligns with
              your business objectives
            </p>
          </div>

          <div className={classes.subContainer}>
            <img
              className={classes.strategyIcon}
              src="/img/dartIcon.svg"
              alt="dart"
              width="94px"
            />
            <p className={classes.strategyTitle}>Implementation & Support</p>
            <p className={classes.strategyText}>
              Our team supports you at every step of the implementation,
              ensuring you make a successful entry into the US market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
