"use client";
import { useState } from "react";
import classes from "./footer.module.css";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.footer}>
      {showModal && (
        <div className={classes.modal}>
          <h1>Terms & Support</h1>
          <p>
            This website has been created with Canva, but the content is User
            Content that is subject to our <u>Terms of Use</u>. If you see
            anything that breaches our <u>acceptable use policy</u>, please
            report it to our content review team.
          </p>
          <div className={classes.modalButtons}>
            <button onClick={closeModal} className={classes.closeBtn}>
              Close
            </button>
            <button className={classes.reportBtn}>Report</button>
          </div>
        </div>
      )}

      <div className={classes.footerContent}>
        <p onClick={openModal}>Terms & Support</p>
      </div>
    </div>
  );
}
