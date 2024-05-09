import Client from "./components/Client";
import Data from "./components/Data";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Client />
      <Services />
      <Data />
    </>
  );
}
