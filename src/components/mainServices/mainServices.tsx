import classes from "./mainServices.module.css";

const services = [
  {
    title: "Market Entry Consulting",
    description:
      "Gain a comprehensive understanding of the US landscape with our market analysis, strategic entry plans, and feasibility studies designed to ensure a smooth market entry.",
    className: classes.services1,
  },
  {
    title: "Cultural Adaptation and Localization",
    description:
      "Connect with your US audience through customized product adaptations and marketing strategies that resonate with cultural nuances and consumer behavior.",
    className: `${classes.services1} ${classes.services2}`,
  },
  {
    title: "Regulatory and Compliance Assistance",
    description:
      "We help you open your business in the USA and stay compliant with our expert guidance on US business laws, regulatory frameworks, and administrative procedures.",
    className: `${classes.services1} ${classes.services3}`,
  },
];

export default function MainServices() {
  return (
    <div id="services" className={classes.services}>
      <div className={classes.mainServices}>
        <h1 className={classes.mainHeading}>Our Main Services</h1>
        <div className={classes.services}>
          {services.map((service, index) => (
            <div key={index} className={service.className}>
              <div className={classes.heading}>{service.title}</div>
              <p className={classes.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
