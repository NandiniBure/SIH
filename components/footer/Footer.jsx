import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
const footer = () => {
  return (
    // <div className=" w-full mt-7  text-end bg-green-500 h-20 p-5  ">
    //   <div className="flex gap-20 text-center">
    //     <h1 className=" text-green-200 font-semibold">
    //       {" "}
    //       ContactUs <span className=" hover:underline">125-624-652</span>
    //     </h1>
    //     <h1 className=" text-green-200 font-semibold ">
    //       {" "}
    //       Email : <span className="hover:underline">kerelahealth@gmail.com</span>
    //     </h1>
    //   </div>
    //   <span className="">&copy; 2023</span>
    // </div>
    <footer className="bg-green-500 text-white p-4">
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-white hover:text-gray-300">
          <FacebookIcon/>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
        <EmailIcon/>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
         <TwitterIcon/>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">Kerela Govt</p>
        <p>&copy; 2023. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default footer;
