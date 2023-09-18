"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Cart from "../cart/Cart";
import LeftsideBar from "../leftsideBar/LeftsideBar";
import ReactPlayer from "react-player/youtube";
import CloseIcon from "@mui/icons-material/Close";
const Video = () => {
  const [play, setplay] = useState(false);
  const vd = useRef();
  useEffect(
    (e) => {
      function handleClickOutside(e) {
        if (vd.current && !vd.current.contains(e.target)) {
          setplay(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [vd]
  );

  return (
    <div className={`flex`}>
      <LeftsideBar />
      <div
        className={`grid md:grid-cols-2 gap-8 lg:grid-cols-3 p-5 ${
          play ? " opacity-30" : " "
        }`}
      >
        <Cart play={play} setplay={setplay} img="/thumbnail.png" />
        <Cart play={play} setplay={setplay} img="/thumbnail1.jpg" />
        <Cart play={play} setplay={setplay} img="/thumbnail2.jpg" />
        <Cart play={play} setplay={setplay} img="/thumbnail3.jpg" />
        <Cart play={play} setplay={setplay} img="/thumbnail.png"/>
        <Cart play={play} setplay={setplay} img="/thumbnail.png" />
      </div>
      <div className="">
        {play && (
          <div className="w-full h-full absolute  md:top-32 lg:left-64 md:left-[8rem] ">
            <div
              ref={vd}
              id="video"
              className="sticky top-20  md:w-[46rem] lg:w-[75rem]  md:h-[27rem] lg:h-[35rem] z-40"
            >
              <div onClick={() => setplay(!play)} className="">
                <CloseIcon className=" bg-green-500 absolute -top-7 right-0 rounded-r-lg rounded-l-lg w-14  h-6" />
              </div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                controls
                width="100%"
                height="100%"
                className="z-50"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
