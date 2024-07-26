import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/BazarSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
    const dispatch = useDispatch();
  return (
    <div className=" w-2/3 pr-10">
      <div className="w-full">
        <h2 className=" font-roboto text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6 ">
            <div className="flex items-center  gap-2">
              <IoCloseSharp
              onClick={() => dispatch(deleteItem(item.id)) & toast.error(item.title + "is removed")}
                className=" text-xl text-gray-600 hover:text-red-600 cursor-pointer
             duration-300"
              />
              <img className="w-32 h-32 object-cover" src={item.image} alt="imageProduct" />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button 
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2
                 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                  </button>
                <span>{item.quantity}</span>
                <button 
                onClick={() => dispatch(incrementQuantity(item.id))} 
                 className="border h-5 font-normal text-lg flex items-center justify-center px-2
                 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                  </button>
              </div>
            </div>
            <p className="w-10">{item.price * item.quantity} </p>

          </div>
        ))}
      </div>
      <button
      onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty!")}
      className=" bg-red-600 text-white mt-8 ml-7 py-1 px-2 hover:bg-red-800 duration-300">
        Reset Cart
      </button>
      <Link to={"/"}>
      <button className="mt-8 ml-7 flex items-center gap-1 text-gray-500 hover:text-black duration-300">
        <span>
            <FaArrowRightLong />
        </span>
        Go to Shop
      </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
