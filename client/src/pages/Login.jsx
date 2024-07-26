import { githubLogo, googleLogo } from "../assets"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../redux/BazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userData = useSelector((state) => state.bazar.userInfo);

    const dispatch = useDispatch()
    const auth = getAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth , provider).then((result)=>{
            const user = result.user;
            dispatch(addUser({
                id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            })
            );
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }).catch((err) => {
            console.error(err);
        });
    }

    const handleSingOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            dispatch(removeUser())
            toast.success("Log Out successful")
        }).catch((err) => {
            console.error(err);
        })
    }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10 ">
        <div onClick={handleGoogleLogin}
        className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md
         flex items-center justify-center hover:border-blue-600 cursor-pointer duration-300">
            <img className="w-8 mx-2" src={googleLogo} alt="imgGoogle" />
            <span className="text-sm text-gray-900">
                Sing In with Google
            </span>
        </div>
       {
        userData && (
            <button onClick={handleSingOut}
            className=" bg-black text-white text-base py-3 px-8 tracking-wide rounded-md
            hover:bg-gray-800 duration-300">
               Sing Out
           </button>
        )
       }
      </div>
      <div className="w-full flex items-center justify-center gap-10 ">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md
         flex items-center justify-center hover:border-blue-600 cursor-pointer duration-300">
            <img className="w-8 mx-2" src={githubLogo} alt="imgGoogle" />
            <span className="text-sm text-gray-900">
                Sing In with GitHub
            </span>
        </div>
        {
        userData && (
            <button onClick={handleSingOut}
            className=" bg-black text-white text-base py-3 px-8 tracking-wide rounded-md
            hover:bg-gray-800 duration-300">
               Sing Out
           </button>
        )
       }
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

export default Login
