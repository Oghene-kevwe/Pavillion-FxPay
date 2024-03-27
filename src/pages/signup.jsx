import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [activeOTP, setActiveOTP] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formData, setFormData] = useState({ accountNumber: "", OTP: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // checks when account number is == 10
  useEffect(() => {
    if (formData.accountNumber.length == 10) {
      setActiveOTP(true);
      setFormMessage("We have sent an OTP to your registered phone number");
    } else {
      setActiveOTP(false);
    }
  }, [formData.accountNumber]);

  //OTP COUNTDOWN
  const [countdown, setCountdown] = useState(20); // 1 min 50 secs in seconds
  useEffect(() => {
    if (activeOTP) {
      setCountdown(20);
    }

    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevCount - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeOTP]);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  function onSignup(e) {
    e.preventDefault();
  }

  const navigate = useNavigate();

  return (
    <section className=" px-[2vw]">
      <div className="  flex justify-center items-center flex-col gap-4">
        <form
          onSubmit={onSignup}
          className=" bg-white shadow-md rounded-md px-4 border w-[80%] md:w-[50%] lg:w-[30%] pb-8  "
        >
          <p className=" font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4 -mt-2">
            Signup
          </p>
          <div className=" flex flex-col gap-6 mt-8">
            {/* Account Number */}
            <div>
              <label>Account Number</label>
              <div className=" h-8">
                <input
                  required
                  maxLength="10"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  name="accountNumber"
                  type="text"
                  className=" pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Your Providus Account Number"
                />
              </div>
            </div>

            {/* OTP */}
            <div className={`${activeOTP ? "opacity-100" : "opacity-40"}`}>
              {/* Resend OTP  */}
              {activeOTP && (
                <div className=" text-sm mb-6 mt-1 text-primaryYellow flex gap-y-4 flex-col ">
                  <p>{formMessage}</p>
                  {/* count down */}
                  <div>
                    {countdown == 0 ? (
                      <button
                        onClick={() => setCountdown(20)}
                        className="buttonBgColor text-white font-semibold px-2 py-1"
                      >
                        Resend OTP
                      </button>
                    ) : (
                      <p className=" text-red-500">
                        Resend OTP in:{" "}
                        {`${minutes.toString().padStart(2, "0")}:${seconds
                          .toString()
                          .padStart(2, "0")}`}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <label>OTP</label>
              <div className=" h-8">
                <input
                  value={formData.OTP}
                  onChange={handleChange}
                  name="OTP"
                  type="text"
                  className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter OTP Sent To Registered Phone Number"
                  disabled={!activeOTP}
                />
              </div>
            </div>
          </div>
          {/* signup button */}
          <button
            onClick={() => navigate("/account-details")}
            className=" shadow-md buttonBgColor text-white mt-16 mx-auto py-4 w-full"
          >
            Signup
          </button>
          {/* Signup link */}
          <div className=" mt-8">
            <p className=" text-sm">
              Don't have a Providus account ?{" "}
              <Link
                to={
                  "https://oap.providusbank.com/rmcorporateaccount/#/createaccount/createaccount"
                }
                className=" font-bold text-primaryYellow"
                target="_blank"
              >
                click here
              </Link>{" "}
              to open an account.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
