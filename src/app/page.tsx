import { Metadata } from "next";
import Client from "./components/Client";
import Data from "./components/Data";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Culture from "./about/components/Culture";
import Teams from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Home",
}


export default function Home() {
  return (
    <div className="mt-[76px]">
      <Hero />
      <Client />
      <Overview />
      <Culture />
      <Services />
      <Teams />
      <Data />
      <Testimonial />
    </div>
  );
}
