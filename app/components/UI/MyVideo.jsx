import { Button } from "flowbite-react";
import React from "react";
import { FaYoutube } from "react-icons/fa";
const MyVideo = () => {
  return (
    <div className="h-screen relative">
      <video
        autoPlay
        muted
        loop
        src="/video/video.mp4"
        className="w-full h-full object-cover  max-h-[80%]"
      ></video>
      <div className="video-content absolute max-w-[60%] top-[25%] left-10 text-mytext">
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
          <button className="btn bg-mymain me-2">Contact us</button>
          <button className="btn bg-mysec flex items-center me-4">YouTube <FaYoutube className="text-xl ms-2" /></button>
        </div>
      </div>
    </div>
    
  );
};

export default MyVideo;
