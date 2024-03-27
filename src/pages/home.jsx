import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <section className=" px-[2vw] md:px-16 h-screen">
      <div className=" flex flex-col gap-4 w-fit mx-auto ">
        <p>Welcome to Providus FXPay</p>
        <p>A card based automated willing seller willing buyer platform.</p>

        <div className=" mt-8 flex gap-x-4 justify-center text-white font-bold">
          <Link to={"/login"} className=" buttonBgColor px-4 py-1 rounded-sm">
            Login
          </Link>
          <Link to={"/signup"} className=" buttonBgColor px-4 py-1 rounded-sm">Sign up</Link>
        </div>
      </div>
    </section>
  );
};
