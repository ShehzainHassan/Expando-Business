import classes from "./navbar.module.css";
export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#services-2">Services</a>
      <a href="#feedback">Feedback</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
