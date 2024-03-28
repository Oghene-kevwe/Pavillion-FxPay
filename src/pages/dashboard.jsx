import React from "react";
import masterCardLogo from "../assets/masterCard.svg";
import providusLogo from "../../public/providusFavicon.png";

export const Dashboard = () => {
  return (
    <section>
      <div className=" bg-white px-8 pb-8 md:w-[70%] max-w-[460px]  mx-auto shadow-md pt-4">
        <p className="   font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4  -mt-6  ">
          Card Details
        </p>

        {/* front of  card */}
        <div className="rounded-2xl bg-gradient-to-tr from-blue-400 to-slate-500 text-white mt-8 p-3 ">
          <div className="  flex justify-between items-center">
            <p className=" font-semibold">Virtual Card</p>
            <div className=" w-[3rem]">
              <img
                src={providusLogo}
                alt="providus logo"
                className=" w-full h-full"
              />
            </div>
          </div>

          <div className=" mt-8 mb-10">
            <p className=" font-bold text-xl tracking-widest font-sans">
              5484 7872 9877 1002
            </p>
            <p className=" text-center text-sm mt-2">
              Valid Thru: <span className=" font-semibold">01/21</span>{" "}
            </p>
          </div>

          <div className=" flex items-center justify-between">
            <p className=" font-bold ">Test User</p>
            <div className=" w-[5rem]">
              <img
                src={masterCardLogo}
                alt="master Card Logo"
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* back of  card */}
        <div className="rounded-2xl bg-gradient-to-tr from-blue-400 to-slate-500 text-white mt-8 p-3 h-[246.5px] ">
          <p className=" text-right mt-8 w-[80%] bg-gray-100 p-2 text-black">
            811
          </p>
        </div>
      </div>
    </section>
  );
};
