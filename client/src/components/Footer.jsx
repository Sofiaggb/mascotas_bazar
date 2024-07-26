import { logo, paymethod } from "../assets/index";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaUser,
  FaPaypal,
  FaHome
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" bg-purple-950 text-[#949494] p-20 font-roboto">
      <div className=" max-w-screen-xl mx-auto grid grid-cols-4  ">
        {/* logo icon */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logo} alt="logo" />
          <p className="text-white text-sm tracking-wide">© Bazar.com</p>
          <img className="w-56" src={paymethod} alt="paymethod" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        {/* locate Us */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Venezuela</p>
            <p>Mobile: 444 444 4444</p>
            <p>E-mail: email@email.com</p>
          </div>
        </div>

        {/* porfile */}
        <div >
            <h2 className=" text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaUser /></span>
                my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaPaypal /></span>
                checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><FaHome /></span>
                order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span className="text-lg"><IoLocationSharp /></span>
                help & support
            </p>
          </div>
        </div>

        {/* subscribe */}
        <div className="flex flex-col justify-center">
            <input className=" bg-transparent border px-4 py-2 text-sm" type="email" placeholder="E-mail" />
            <button className="text-sm border text-white border-t-0 hover:bg-purple-700
             active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
