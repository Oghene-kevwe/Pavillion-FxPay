import { useNavigate } from "react-router-dom";

export const AccountDetails = () => {
  const accountDetailsData = [
    { id: 0, title: "Account Name", detail: "Test user" },
    { id: 1, title: "Account Number", detail: "01234567" },
    { id: 2, title: "Phone Number", detail: "+234 814 9857 897" },
    { id: 3, title: "Email", detail: "testuser@gmail.com" },
  ];

  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <section className=" px-[2vw] md:p-16">
      <div className=" bg-white px-8 pb-8 md:w-[70%] max-w-[460px]  mx-auto shadow-md">
        <p className=" mb-8  font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4">
          Account Details
        </p>
        {/* content */}
        <div className=" flex flex-col gap-6">
          {accountDetailsData.map(({ detail, id, title }) => (
            <article key={id}>
              <div className=" flex gap-x-2">
                <p className=" font-semibold">{title}:</p>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
        {/* set up username */}

        <div className=" flex flex-col gap-6 mt-16">
          <h2 className=" font-semibold text-xl">Setup a Username</h2>
          {/* form */}
          <form onSubmit={submitForm} className=" flex flex-col gap-6">
            {/* User Name */}
            <div>
              <label>Username</label>
              <div className=" h-8">
                <input
                  type="text"
                  className=" pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Username"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label>Password</label>
              <div className=" h-8">
                <input
                  type="text"
                  className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Password"
                />
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label>Confirm Password</label>
              <div className=" h-8">
                <input
                  type="text"
                  className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            {/* submit */}

            <button
              onClick={() => navigate("/dashboard")}
              className=" shadow-md buttonBgColor text-white mt-12 mx-auto py-4 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
