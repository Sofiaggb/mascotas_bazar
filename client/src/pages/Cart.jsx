import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userData = useSelector((state) => state.bazar.userInfo);

  const [total, setTotal] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    })
    setTotal(price.toFixed(2));
  }, [productData])

  const handleCheckout = () => {
    if (userData) {
      setPayNow(true)
    } else {
      toast.error("Please Sing in to Checkout");
    }
  }
  const payment = async(token) => {
    await axios.post("http://localhost:8000/pay", {
      amount:total * 100,
      token:token
    })
  }
  return (
    <div className=" max-w-screen-xl mx-auto py-10 flex">
      <CartItem />
      <div className=" w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className=" text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal
            <span className=" font-roboto  font-bold text-lg"> $ {total} </span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping
            <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nam sequi corporis illo numquam ipsum sun</span>
          </p>
        </div>
        <p className=" font-roboto font-semibold flex justify-between mt-6">
          Total
          <span className=" text-xl font-bold">$ {total}</span>
        </p>
        <button onClick={handleCheckout}
          className=" text-base bg-purple-950 text-white w-full py-3 mt-6 hover:bg-purple-700
         duration-300">
          Proceed to Checkout
        </button>
        {
          payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Om32yJAq9YJm8cYPehTkg0i3LsPIsvFhQBpUeYQbThkqphfH6pmxXuXabgsMyxeWlB1vrRJPhRpTJvEb1oDTtIg003lS8ycPA"
                name="Bazar Online Shopping"
                amount={total * 100}
                label="Pay to Bazar"
                description={"Your payment amount is" + total}
                token={payment}
                email={userData.email}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart
