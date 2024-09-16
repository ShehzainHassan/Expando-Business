import classes from "./feedback.module.css";

const comments = [
  {
    text: `"Breaking into the USA market was daunting. Thanks to the meticulous and unwavering support from Expando, we've secured significant funding and recognition as a top innovative tech company."`,
    author: "- Sofia Petrova",
    className: classes.comment1,
  },
  {
    text: `"Starting as a small family restaurant, we dreamed of reaching a broader American audience. With their heartfelt guidance, we've expanded nationwide, sharing our heritage far beyond our local community."`,
    author: "- Maria Gonzalez",
    className: classes.comment2,
  },
  {
    text: `"With a vision to impact positively, we needed guidance to navigate the US market. The team's personal and professional support helped turn our passion into a reality that now touches thousands across the US."`,
    author: "- Lorna Alvarado",
    className: classes.comment3,
  },
];

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
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`${classes.comment} ${comment.className}`}>
                <p>{comment.text}</p>
                <p className={classes.commentor}>{comment.author}</p>
              </div>
            ))}
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
                results, making your American dream a successful reality.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.rightColumn}>
          <img src="/img/feedback2.webp" alt="people" />
        </div>
      </div>
    </div>
  );
}
