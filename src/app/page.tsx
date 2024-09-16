import Image from "next/image";
import classes from "./page.module.css";
import Banner from "@/components/banner/banner";
import Navbar from "@/components/navbar/navbar";
import AboutUs from "@/components/aboutUs/aboutUs";
import MainServices from "@/components/mainServices/mainServices";
import DigitalServices from "@/components/digitalServices/digitalServices";
import Feedback from "@/components/feedback/feedback";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/footer/footer";
import Divider from "@/components/divider/divider";

export default function Home() {
  return (
    <div className={classes.background}>
      <Navbar />
      <Banner />
      <AboutUs />
      <MainServices />
      <Divider />
      <DigitalServices />
      <Feedback />
      <ContactUs />
      <Footer />
    </div>
  );
}
