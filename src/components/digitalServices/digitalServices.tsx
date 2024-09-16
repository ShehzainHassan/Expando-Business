import Divider from "../divider/divider";
import classes from "./digitalServices.module.css";

export default function DigitalServices() {
  const servicesList = [
    "Website and E-commerce Store Setup",
    "Digital Marketing and SEO Services",
    "Analytics and Performance Monitoring",
    "App Development and Launch",
  ];

  const businessStrategies = [
    {
      icon: "/img/phoneImg.svg",
      alt: "phone",
      title: "Consultation",
      text: "We start with a deep dive into your business to understand your needs, goals, and challenges.",
      width: "94px",
    },
    {
      icon: "/img/docIcon.svg",
      alt: "doc",
      title: "Strategy Development",
      text: "We develop a customized market entry strategy that aligns with your business objectives",
      width: "70px",
    },
    {
      icon: "/img/dartIcon.svg",
      alt: "dart",
      title: "Implementation & Support",
      text: "Our team supports you at every step of the implementation, ensuring you make a successful entry into the US market.",
      width: "94px",
    },
  ];

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
            {servicesList.map((service, index) => (
              <li key={index} className={classes.listItem}>
                <img
                  src="/img/list-img.svg"
                  alt="list-img"
                  className={classes.icon}
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      <div className={classes.container2}>
        <h1>HOW TO GROW OR START YOUR BUSINESS IN THE USA</h1>
        <div className={classes.businessStrategies}>
          {businessStrategies.map((strategy, index) => (
            <div key={index} className={classes.subContainer}>
              <img
                className={classes.strategyIcon}
                src={strategy.icon}
                alt={strategy.alt}
                width={strategy.width}
              />
              <p className={classes.strategyTitle}>{strategy.title}</p>
              <p className={classes.strategyText}>{strategy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
