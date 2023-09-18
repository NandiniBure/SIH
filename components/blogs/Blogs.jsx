import React from "react";
import AddIcon from "@mui/icons-material/Add";
import LeftsideBar from "../leftsideBar/LeftsideBar";
const Blogs = () => {
  return (
    <div className="flex">
      <LeftsideBar />
      <div className=" grid gap-5 p-10 lg:grid-cols-3 md:grid-cols-2">
        <div className="relative  border flex-col justify-between bg-lime-100  border-gray-950  w-96 max-h-[15rem] rounded-lg hover:shadow-lg z-0">
          <div className="flex gap-2">
            <img
              src="image1.jpg"
              width={40}
              height={40}
              className=" ml-5 mt-2 mb-2 rounded-full"
            />
            <h1 className="text-black hover:text-orange-600  font-bold font-serif m-5 text-2xl">
              Title
            </h1>
          </div>
          <div className=" overflow-hidden">
            <p className=" mt-2 ml-4   ">
              ghf trf uryu utu tut uyd yrtur iyt rytdtrhf yuf edt fufytd trs
              Does para mean two? para- comes from Greek, where it has the mushd
              wuiu ydi wqid IQfZp4j84S0h4vWIxBH5j5Q1V
            </p>
          </div>
          <div className="flex justify-between absolute bottom-0 w-full">
            <button className="bg-yellow-300 p-2 rounded-l-lg basis-1/3 border-gray-600 border hover:bg-opacity-70 hover:underline">
              Edit
            </button>
            <button className="bg-green-300 p-2 basis-1/3 border-gray-600 border hover:bg-opacity-70 hover:underline">
              Read
            </button>
            <button className="bg-red-300 px-3 rounded-r-lg basis-1/3 border-gray-600 border hover:bg-opacity-70 hover:underline">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
