import React from "react";

const Us = () => {
  return (
    <section className="section flex justify-between px-8 md:px-16 xl:px-24">
      <div className="w-[47%] flex justify-between">
        <div className="w-[47%] mt-10">
          <div className="bg-[url('/img/common/7.jpg')] mb-8 uscard"></div>
          <div className="bg-[url('/img/common/4.jpg')] uscard"></div>
        </div>
        <div className=" w-[47%] -translate-y-8">
          <div className="">
            <div className="bg-[url('/img/common/6.jpg')] mb-8 uscard"></div>
            <div className="bg-[url('/img/common/5.jpg')] uscard"></div>
          </div>
        </div>
      </div>
      <div className="text-start w-[47%]">
        <div className="upper-text">
          <span>About Us</span>
          <h2>We are focusing on🎯</h2>
        </div>
        <p>
          <strong>Just Escape Austria, born in 2016,</strong>
          was inspired by our love for escape rooms, ignited during a 2015
          adventure in Cambodia. In 2019, we created “Just Escape Your City” in
          Georgia, offering self-guided tours and exciting scavenger hunts in
          over 15 European countries. Our mission is to share our passion for
          escape rooms and scavenger hunts, promising unique and unforgettable
          experiences.
        </p>
        <a href="#contact" className="btn bg-mymain mt-14 inline-block">
          Contact us
        </a>
      </div>
    </section>
  );
};

export default Us;
