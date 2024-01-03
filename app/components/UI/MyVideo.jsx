import { Button } from "flowbite-react";
import React from "react";
import { FaYoutube } from "react-icons/fa";
const MyVideo = () => {
  return (
    <section className="h-[80vh] relative">
      <video
        autoPlay
        muted
        loop
        src="/video/video.mp4"
        className="w-full h-full object-cover  "
      ></video>
      <div className="video-content absolute max-w-[60%] top-[25%] left-16 text-mytext">
        <h1 className="mb-8">
          MAKING YOUR EVENT <br />
          MAGICAL ✨
        </h1>
        <ul className="list-disc list-inside">
          <li className="mb-2">Consulting for escape rooms</li>
          <li className="mb-2">Build an escape room for business</li>
          <li className="mb-2">Making a scaveger hunt for an event</li>
        </ul>
        <div className="flex items-center mt-12">
          <button className="btn bg-mysec flex items-center me-4">
            YouTube <FaYoutube className="text-xl ms-2" />
          </button>
          <a href="#contact" className="btn me-2 bg-mymain inline-block">Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default MyVideo;
