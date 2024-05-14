
import Teams from "./about/components/Team";
import Client from "./components/Client";
import Data from "./components/Data";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <>
      <Hero />
      <Client />
      <Overview />

      <Services />
      <Teams />
      <Data />
      <Testimonial />

    </>
  );
}
