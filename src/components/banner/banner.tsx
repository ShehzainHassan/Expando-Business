import classes from "./banner.module.css";

export default function Banner() {
  return (
    <div id="home" className={classes.background}>
      <div className={classes.content}>
        <div />
        <div className={classes.textContent}>
          <div className={classes.bannerIcon}>
            <img src="/img/Expando.svg" alt="icon" />
            <p>EXPANDO</p>
          </div>
          <div className={`${classes.textOverlay} ${classes.resetBrightness}`}>
            <h1 className={classes.title}>
              Top-notch <br /> business services
            </h1>
            <p className={classes.description}>
              Expert guidance to establish and expand <br /> your Latin American
              or European <br /> business in the USA.
            </p>
            <button className={classes.button}>DISCOVER HOW</button>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
