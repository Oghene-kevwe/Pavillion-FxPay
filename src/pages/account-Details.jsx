import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AccountDetails = () => {
  const accountDetailsData = [
    { id: 0, title: "Account Name", detail: "Test user" },
    { id: 1, title: "Account Number", detail: "01234567" },
    { id: 2, title: "Phone Number", detail: "+234 814 9857 897" },
    { id: 3, title: "Email", detail: "testuser@gmail.com" },
  ];

  //USD ACCOUNT
  const usdAccountDetailsData = [
    {
      id: 0,
      AccountName: "Test USD user 1",
      AccountNumber: "01234567",
    },
    {
      id: 1,
      AccountName: "Test USD user 2",
      AccountNumber: "04234567",
    },
  ];

  const [selectedUSDAccountId, setSelectedUSDAccountId] = useState(0);
  const [selectedAccountDetails, setSelectedAccountDetails] = useState(
    usdAccountDetailsData[0]
  );

  const handleUSDAccountSelection = (accountId) => {
    setSelectedUSDAccountId(accountId);
    const selectedAccount = usdAccountDetailsData.find(
      (account) => account.id === accountId
    );
    setSelectedAccountDetails(selectedAccount);
  };
  const navigate = useNavigate();

  

  return (
    <section className=" px-[2vw] md:p-16">
      <div className=" bg-white px-8 pb-8 md:w-[70%] max-w-[460px]  mx-auto shadow-md pt-4">
        <p className="   font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4  -mt-6  ">
          Account Details
        </p>
        {/* content */}
        <div className=" flex flex-col gap-6 mt-8">
          <h2 className=" font-semibold text-center text-lg">Naira Account</h2>
          {/*naira account */}
          {accountDetailsData.map(({ detail, id, title }) => (
            <article key={id}>
              <div className=" flex gap-x-2">
                <p className=" font-semibold">{title}:</p>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>

        {/* USD Account */}
        <div className=" mt-16">
          <h2 className=" text-xl font-semibold text-primaryYellow ">
            Select a USD Account to continue with signup{" "}
          </h2>
          <h2 className=" font-semibold text-center text-lg mb-6">
            USD Account
          </h2>

          <div className=" flex flex-col gap-y-3">
            {usdAccountDetailsData.map(({ AccountName, id, AccountNumber }) => (
              <div className=" border-b pb-3 flex justify-between items-center ">
                <div key={id} className=" flex flex-col gap-y-2 ">
                  {/* currency */}
                  <p>
                    <span className=" font-semibold">Currency: </span>
                    <span className=" inline-block ml-2">USD</span>{" "}
                  </p>
                  {/* account name */}
                  <p>
                    <span className=" font-semibold">Account Name: </span>
                    <span className=" inline-block ml-2">
                      {AccountName}
                    </span>{" "}
                  </p>
                  {/* account number */}
                  <p>
                    <span className=" font-semibold">Account Number: </span>
                    <span className=" inline-block ml-3">
                      {AccountNumber}
                    </span>{" "}
                  </p>
                </div>
                {/* select input */}
                <div>
                  <input
                    type="radio"
                    name="SelectUSDAccount"
                    checked={selectedUSDAccountId === id}
                    onChange={() => handleUSDAccountSelection(id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Continue */}
        <button
          onClick={() => navigate("/setup-username")}
          className=" shadow-md buttonBgColor text-white mt-12 mx-auto py-4 w-full"
        >
          Continue
        </button>
      </div>
    </section>
  );
};
