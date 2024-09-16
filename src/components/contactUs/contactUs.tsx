import classes from "./contactUs.module.css";

const contactInfo = [
  {
    icon: "/img/location.svg",
    alt: "location",
    text: "123 Anywhere St. Any City, ST 12345",
  },
  { icon: "/img/phone.svg", alt: "phone", text: "(123) 456-7890" },
  { icon: "/img/mail.svg", alt: "mail", text: "hello@reallygreatsite.com" },
];

const officeHours = [
  { day: "Monday to Friday", time: "9:00 am to 6:00 pm" },
  { day: "Saturday", time: "9:00 am to 12 noon" },
  { day: "Closed on Sundays", time: "" },
];

const socialIcons = [
  { icon: "/img/facebook.svg", alt: "facebook-logo" },
  { icon: "/img/twitter.svg", alt: "twitter-logo" },
  { icon: "/img/instagram.svg", alt: "instagram-logo" },
];

export default function ContactUs() {
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.contactUs}>
        <h1>Contact Us</h1>
        <ul>
          {contactInfo.map((info, index) => (
            <li key={index}>
              <img src={info.icon} alt={info.alt}></img>
              {info.text}
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.officeHours}>
        <h1>Office Hours</h1>
        <ul>
          {officeHours.map((hour, index) => {
            return (
              <>
                <li key={`${index}-day`} className={classes.days}>
                  {hour.day}
                </li>
                {hour.time && (
                  <li key={`${index}-time`} className={classes.time}>
                    {hour.time}
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>

      <div className={classes.follow}>
        <div className={classes.social}>
          <h1>Follow us online</h1>
          <div className={classes.socialIcons}>
            {socialIcons.map((icon, index) => (
              <img key={index} src={icon.icon} alt={icon.alt}></img>
            ))}
          </div>
        </div>

        <div className={classes.textContent}>
          <p>
            This is an accessible workplace. Persons with <br /> disabilities
            are welcome to apply
          </p>
          <div className={classes.expando}>
            <img src="/img/Expando_Icon.svg" alt="expando"></img>
            <p>EXPANDO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
