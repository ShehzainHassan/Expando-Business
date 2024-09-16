import classes from "./mainServices.module.css";
export default function MainServices() {
  return (
    <div id="services" className={classes.services}>
      <div className={classes.mainServices}>
        <h1 className={classes.mainHeading}>Our Main Services</h1>
        <div className={classes.services}>
          <div className={classes.services1}>
            <div className={classes.heading}>Market Entry Consulting</div>
            <p className={classes.description}>
              Gain a comprehensive ​understanding of the US ​landscape with our
              market ​analysis, strategic entry plans, ​and feasibility studies
              designed ​to ensure a smooth market ​entry.{" "}
            </p>
          </div>

          <div className={`${classes.services1} ${classes.services2}`}>
            <div className={classes.heading}>
              Cultural Adaptation and Localization
            </div>
            <p className={classes.description}>
              Connect with your US audience ​through customized product
              ​adaptations and marketing ​strategies that resonate with
              ​cultural nuances and consumer ​behavior.
            </p>
          </div>

          <div className={`${classes.services1} ${classes.services3}`}>
            <div className={classes.heading}>
              Regulatory and Compliance Assistance
            </div>
            <p className={classes.description}>
              We help you open your business ​in the USA and to stay compliant
              ​with our expert guidance on US ​business laws, regulatory
              ​frameworks, and administrative ​procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
