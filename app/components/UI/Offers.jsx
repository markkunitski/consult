import React from "react";
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
const Offers = () => {
  return (
    <section className="section -translate-y-4 flex justify-between px-8 md:px-16 xl:px-24">
      <article className="w-[47%] text-mytext">
        <a
          className="p-10 glow flex flex-col-reverse object-cover bg-cover "
          href="#scavenger"
        >
          <div className="flex items-center justify-between">
            <h3 className="capitalize">Scavenger Hunts</h3>
            <IoExtensionPuzzle className="text-4xl" />
          </div>
        </a>
      </article>
      <article className="w-[47%] text-mytext">
        <a
          className="p-10 glowp flex flex-col-reverse object-cover bg-cover  "
          href="#escape"
        >
          <div className="flex items-center justify-between">
            <h3 className="capitalize">Escape Rooms</h3>
            <IoExit className="text-4xl" />
          </div>
        </a>
      </article>
    </section>
  );
};

export default Offers;
