/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./navbar.module.css";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <>
      <div className={classes.navbar}>
        <button onClick={toggleMenu} className={classes.menuButton}>
          <img src="/img/hamburger.svg" alt="hamburger"></img>
        </button>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#services-2">Services</a>
        <a href="#feedback">Feedback</a>
        <a href="#contact">Contact</a>
      </div>

      {isMenuOpen && <div className={classes.backgroundOverlay} />}
      <div
        className={`${classes.menu} ${
          isMenuOpen ? classes.open : classes.closed
        }`}
        ref={menuRef}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#services-2">Services</a>
        <a href="#feedback">Feedback</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}
