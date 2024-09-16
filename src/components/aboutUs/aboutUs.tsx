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
                <h1 className={classes.title}>
                  Unlock the US <br /> Market
                </h1>
                <p className={classes.description}>
                  Welcome to your gateway to the US market. <br />
                  We specialize in helping businesses from <br /> Latin America
                  and Europe navigate the <br /> complexities of entering and
                  thriving in one <br /> ​of the world's most lucrative markets.
                  With ​<br /> tailored strategies and local expertise, your{" "}
                  <br /> ​business can flourish overseas.
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
