import { Link } from "react-router-dom";
import { logo, userDefault } from "../assets/index";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux"

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userData = useSelector((state) => state.bazar.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-24 " src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="headerLink">Home </li>
            <li className="headerLink">Pages</li>
            <li className="headerLink">Shop</li>
            <li className="headerLink">Element</li>
            <li className="headerLink">Blog</li>
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <span ><FiShoppingCart className="w-7 h-7" /></span>
              <span className="absolute w-6 top-0 left-1 text-sm flex items-center justify-center font-semibold
            z-10">
                {productData.length}
              </span>
              <span className="absolute  top-0 right-1 text-sm flex items-center justify-center rounded-full
             w-4 h-4 bg-white "></span>
            </div>
            </Link>
        <Link to={"/login"}>
        <img className="w-8 h-8 rounded-full"
            src= {
              userData ? userData.image : userDefault
            }
            alt="user logo" />
        </Link>
        {
          userData && (
            <p className=" text-base font-roboto font-semibold">
              {userData.name}
               </p>
          )
        }
        </div>
      </div>

    </div>
  );
};

export default Header;
