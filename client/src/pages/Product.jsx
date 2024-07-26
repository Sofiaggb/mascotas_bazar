import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../redux/BazarSlice";
import { ToastContainer, toast } from 'react-toastify';


const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(()=> {
    setDetails(location.state.item);
  }, [])
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className=" w-2/5 relative">
          <img className="w-full h-[500px] object-cover" src={details.image} alt="productImg" />
        </div>
        <div className="flex flex-col justify-center w-3/5 gap-12">
          <div>
            <h2 className=" text-4xl font-semibold">
              {details.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className=" line-through text-base text-red-500"> ${details.price * 2}</p>
              <p className=" text-2xl font-medium text-gray-900"> ${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className=" text-xs text-gray-500">(1 Customer Review)</p>
          </div>
          <p className=" text-base text-gray-500 -mt-3">{details.description} </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button 
                onClick={() => setBaseQty(baseQty === 1 ?  1 : baseQty - 1)}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2
                 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                  </button>
                <span>{baseQty}</span>
                <button onClick={() => setBaseQty(baseQty + 1)} 
                 className="border h-5 font-normal text-lg flex items-center justify-center px-2
                 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                  </button>
              </div>
            </div>
            <button 
            onClick={() => dispatch(addToCart({
              id: details.id,
              title: details.title,
              image: details.image,
              price: details.price,
              quantity: baseQty,
              description: details.description,
            })) & toast.success(details.title + "is added")
          }
            className=" bg-purple-950 hover:bg-purple-700 text-white py-3 px-6 active:bg-violet-800">
              Add to Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category: 
            <span className=" font-medium capitalize"> 
              {details.category}
              </span>
          </p>
        </div>
      </div>
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
  )
}

export default Product
