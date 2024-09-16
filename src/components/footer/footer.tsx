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
  const handleReportClick = () => {
    window.open(
      "https://www.canva.com/help/report-content/?source=design&link=https%3A%2F%2Fexpando12.my.canva.site%2Flaw-firm-website-in-gold-blue-sleek-corporate-style",
      "_blank"
    );
  };

  return (
    <div className={classes.footer}>
      {showModal && (
        <div className={classes.modal}>
          <h2>Terms & Support</h2>
          <p>
            This website has been created with Canva, but the content is User
            Content that is subject to our{" "}
            <a
              href="https://www.canva.com/policies/terms-of-use/"
              target="_blank">
              <u>Terms of Use</u>
            </a>
            . If you see anything that breaches our{" "}
            <a
              href="https://www.canva.com/policies/acceptable-use-policy/"
              target="_blank">
              <u>acceptable use policy</u>
            </a>
            , please report it to our content review team.
          </p>
          <div className={classes.modalButtons}>
            <button onClick={closeModal} className={classes.closeBtn}>
              Close
            </button>
            <button onClick={handleReportClick} className={classes.reportBtn}>
              Report
            </button>
          </div>
        </div>
      )}

      <div className={classes.footerContent}>
        <p onClick={openModal}>Terms & Support</p>
      </div>
    </div>
  );
}
