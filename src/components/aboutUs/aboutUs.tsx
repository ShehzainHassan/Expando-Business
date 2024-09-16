import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div id="about">
      <div className={classes.mainServices}>
        <div className={classes.leftColumn}>
          <div className={classes.content}>
            <div className={classes.textContent}>
              <div />
              <div className={classes.subContent}>
                <h1 className={classes.title}>Unlock the US Market</h1>
                <p className={classes.description}>
                  Welcome to your gateway to the US market. We specialize in
                  helping businesses from Latin America and Europe navigate the
                  complexities of entering and thriving in one of the
                  world&apos;s most lucrative markets. With tailored strategies
                  and local expertise, your business can flourish overseas.
                </p>
                <button className={classes.button}>GET IN TOUCH</button>
              </div>
            </div>

            <div className={classes.rightColumn}>
              <div className={classes.animated}>
                <div className={classes.X4PhG8hCXLA8fPv}>
                  <div className={classes.Tyoe3f71ZRyS0x7n}>
                    <div className={classes.center}>
                      <img src="/img/main-services-img.jpg" alt="woman-pic" />
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
