import classes from "./divider.module.css";
export default function Divider() {
  return (
    <div className={classes.parent}>
      <div className={classes.divider}></div>
    </div>
  );
}
