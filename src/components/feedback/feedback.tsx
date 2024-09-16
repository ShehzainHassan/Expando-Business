import classes from "./feedback.module.css";

export default function Feedback() {
  return (
    <div id="feedback" className={classes.feedback}>
      <div className={classes.background}>
        <img
          className={classes.feedbackImg}
          src="/img/feedback.jpg"
          alt="people"
        />
        <div className={classes.textOverlay}>
          <h1>Success Stories</h1>
          <p>Why you should hire our Agency</p>
          <div className={classes.comments}>
            <div className={`${classes.comment} ${classes.comment1}`}>
              <p>
                "Breaking in to the USA market was daunting. Thanks to the
                meticulous and unwavering support from Expando, we've secured
                significant funding and recognition as a top innovatice tech
                company."
              </p>
              <p className={classes.commentor}>- Sofia Petrova</p>
            </div>
            <div className={`${classes.comment} ${classes.comment2}`}>
              <p>
                "Starting as a small family restaurant, we dreamed of reaching a
                broader American audience. With their heartfelt guidance, we've
                expanded nationwide, sharing our heritage far beyond our local
                community."
              </p>
              <p className={classes.commentor}>- Maria Gonzalez</p>
            </div>
            <div className={`${classes.comment} ${classes.comment3}`}>
              <p>
                "With a vision to impact positvely, we needed guidance to
                navigate the US market. The team's personal and professional
                support helped turn our passion into a reality that now touches
                thousands across the US."
              </p>
              <p className={classes.commentor}>- Lorna Alvarado</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.team}>
        <div className={classes.leftColumn}>
          <div className={classes.gridLayout}>
            <div />
            <div>
              <h1>OUR TEAM</h1>
              <p>
                At Expando, we bring together diverse backgrounds from Latin
                America, Europe, and the United States, forming a superpower
                team with deep insights into different markets and cultures. Our
                mission is to help your business thrive in the U.S. market by
                leveraging our unique blend of expertise and perspectives. We
                don't just consult--we collaborate, innovate, and deliver real
                results, making your American dream a successful reality
              </p>
            </div>
          </div>
        </div>
        <div className={classes.rightColumn}>
          <img src="/img/feedback2.webp" alt="people"></img>
        </div>
      </div>
    </div>
  );
}
