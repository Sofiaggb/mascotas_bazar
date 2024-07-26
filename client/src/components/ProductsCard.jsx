import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addToCart } from "../redux/BazarSlice";
import { ToastContainer, toast } from 'react-toastify';


const ProductsCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  }
  const rootId = idString(id);
  const hadleDetails = () => {
    navigate("/product/" + rootId, {
      state:{
        item: product,
      },
    })
  }
  return (
    <div className="group">
      <div onClick={hadleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover group-hover:scale-110 duration-500" 
        src={product.image} alt={product.title} />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className=" font-roboto text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="transform group-hover:translate-x-24 transition-transform duration-500">
            <p className=" line-through  text-red-500">${product.price * 2}</p>
            <p className=" font-semibold">${product.price}</p>
            </div>
            <p onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: 1,
              description: product.description,
            })) & toast.success(product.title + "is added")
          }
            className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center
             gap-1 top-2 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer
              duration-500">
              Add to Cart
              <span><FaArrowRight /></span>
              </p>
          </div>
        </div>
        <div>
          <p>
            {product.category}
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

export default ProductsCard
