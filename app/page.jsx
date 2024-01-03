import { Carousel } from "flowbite-react";
import Image from "next/image";
import MyVideo from "./components/UI/MyVideo";
import Offers from "./components/UI/Offers";
import Us from "./components/UI/Us";
import Contact from "./components/UI/Contact";
import Scavenger from "./components/UI/Scavenger";
import Escape from "./components/UI/Escape";
import Help from "./components/UI/Help";

export default function Home() {
  return (
    <>
      <main>
        <MyVideo></MyVideo>
        <Offers></Offers>
        <Us></Us>
        <section id="scavenger" className="section px-8 md:px-16 xl:px-24">
          <div className="mb-10 text-center">
            <h2 className="mb-2">Scavenger Hunts</h2>
            <span className="me-4 text-mysec">5 years of practice</span>
            <span className="me-4 text-mysec">239 events</span>
            <span className="me-4 text-mysec">23 happy clients</span>
          </div>

          <Scavenger></Scavenger>
        </section>
        <section id="escape" className="section px-8 md:px-16 xl:px-24">
          <div className="mb-10 text-center">
            <h2 className="mb-2">Escape Rooms</h2>
            <span className="me-4 text-mysec">5 years of practice</span>
            <span className="me-4 text-mysec">239 events</span>
            <span className="me-4 text-mysec">23 happy clients</span>
          </div>

          <Escape></Escape>
        </section>
        <Help></Help>
        <Contact></Contact>
      </main>
    </>
  );
}
