import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
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
          <p className=" font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4">
            Signup
          </p>
          <div className=" flex flex-col gap-6 mt-8">
            {/* Account Number */}
            <div>
              <label>Account Number</label>
              <div className=" h-8">
                <input
                  type="text"
                  className=" pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Your Providus Account Number"
                />
              </div>
            </div>
            {/* OTP */}
            <div>
              <label>OTP</label>
              <div className=" h-8">
                <input
                  type="text"
                  className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter OTP Sent To Registered Phone Number"
                />
              </div>
            </div>
          </div>
          {/* signup button */}
          <button
            onClick={() => navigate("/account-details")}
            className=" shadow-md buttonBgColor text-white mt-12 mx-auto py-4 w-full"
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
