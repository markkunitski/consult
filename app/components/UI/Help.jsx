import React from "react";
import { FaCheck } from "react-icons/fa6";
const Help = () => {
  return (
    <section className="section  px-8 md:px-16 xl:px-24">
      <div className="upper-text text-center">
        <span>We offer</span>
        <h2>What we can do📈</h2>
      </div>
      <div className="flex justify-between mt-20">
        <div className="glow px-8 py-12 w-[49%]">
          <h4>Scavenger hunts</h4>
          <div className="elem">
            <h5 className="flex items-center mt-10 ">
              <FaCheck className="me-2"></FaCheck>Make a scavenger hunt for
              business
            </h5>
            <p className="text-mysec mt-2">
              Boost team engagement with our tailored digital or real-life
              scavenger hunts, perfect for corporate events.
            </p>
          </div>
          <div className="elem">
            <h5 className="flex items-center mt-10 ">
              <FaCheck className="me-2"></FaCheck> Make a scavenger hunt for
              event
            </h5>
            <p className="text-mysec mt-2">
              Elevate gatherings with adventure-packed scavenger hunts, complete
              with equipment and challenges for a memorable experience.
            </p>
          </div>
        </div>
        <div className="glowp px-8 py-12 w-[49%]">
          <h4>Escape Rooms</h4>
          <div className="elem">
            <h5 className="flex items-center mt-10 ">
              <FaCheck className="me-2"></FaCheck>
              Consultin for escape rooms
            </h5>
            <p className="text-mysec mt-2">
              Master the art of escape rooms with expert guidance to captivate
              and challenge participants effectively.
            </p>
          </div>
          <div className="elem">
            <h5 className="flex items-center mt-10 ">
              <FaCheck className="me-2"></FaCheck>Build an escape room for
              business
            </h5>
            <p className="text-mysec mt-2">
              Design captivating escape rooms for your business that leave a
              lasting impression on customers and clients.
            </p>
          </div>
          <div className="elem">
            <h5 className="flex items-center mt-10 ">
              <FaCheck className="me-2"></FaCheck>Build private escape room for
              companies
            </h5>
            <p className="text-mysec mt-2">
              Elevate corporate events with customized escape room experiences
              that promote teamwork and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
