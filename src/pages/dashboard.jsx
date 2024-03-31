import React, { useEffect, useState } from "react";
import masterCardLogo from "../assets/masterCard.svg";
import providusLogo from "../../public/providusFavicon.png";

export const Dashboard = () => {
  const [showAuthInput, setShowAuthInput] = useState(false);
  const [AuthValue, setAuthValue] = useState("");
  const [showcardDetails, setShowCardDetails] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "12982******7783",
    cardHolderName: "Oliver Johnson",
    expiryDate: "****",
    cvv: "122",
    address: "123 Providence street, Lekki Lagos",
  });

  const { cardHolderName, cardNumber, expiryDate, cvv, address } = cardDetails;

  // check for auth code length
  useEffect(() => {
    if (AuthValue.length == 5) {
      setAuthValue("")
      setShowCardDetails(true);
      setCardDetails({
        ...cardDetails,
        cardNumber: "12982786547783",
        expiryDate: "12/26",
      });
    }
  }, [AuthValue]);

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
              {cardNumber}
            </p>
            <p className=" text-center text-sm mt-2">
              Valid Thru: <span className=" font-semibold">{expiryDate}</span>{" "}
            </p>
          </div>

          <div className=" flex items-center justify-between">
            <p className=" font-bold ">{cardHolderName}</p>
            <div className=" w-[5rem]">
              <img
                src={masterCardLogo}
                alt="master Card Logo"
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* show more details button */}
        <button
          onClick={() => setShowAuthInput(true)}
          className=" shadow-md buttonBgColor text-white mt-8 mx-auto block w-[50%] py-4"
        >
          Show Card Details
        </button>

        {/* auth code */}
        {showAuthInput && (
          <div className=" mt-8">
            <label className=" textsm">Authentation Code</label>
            <div className=" h-8">
              <input
                type="text"
                maxLength={5}
                className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                placeholder="Please enter authentication code"
                value={AuthValue}
                onChange={(e) => setAuthValue(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* card details */}
        {showcardDetails && (
          <div className=" mt-8 flex flex-col gap-y-3">
            <h2 className=" font-bold text-lg text-center ">Card Details</h2>
            <CardDetailComponent
              detailTitle={"Card Number"}
              detail={cardNumber}
            />
            <CardDetailComponent
              detailTitle={"Card Holder Name"}
              detail={cardHolderName}
            />
            <CardDetailComponent detailTitle={"CVV"} detail={cvv} />
            <CardDetailComponent
              detailTitle={"Expiry date"}
              detail={expiryDate}
            />
            <CardDetailComponent detailTitle={"Address"} detail={address} />
          </div>
        )}
      </div>
    </section>
  );
};

const CardDetailComponent = ({ detailTitle, detail }) => {
  return (
    <div className=" flex gap-x-2">
      <p className=" font-semibold">{detailTitle}:</p>
      <p>{detail}</p>
    </div>
  );
};
