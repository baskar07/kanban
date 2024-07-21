import React, { useEffect, useState } from "react";
import { BsTrello } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import emailImg from "../../assets/email.svg";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/features/userSlice";

const VerifyEmail = () => {
  const [open, setOpen] = useState(false);
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");
  const token = new URLSearchParams(location.search).get("token");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess } = useSelector((state)=> state.user)

  

  const handleSubmit = (e) =>{
    e.preventDefault();
     let formData = {
      email,token,name,password
     }
    dispatch(signup(formData));
  }

  useEffect(()=>{
    console.log(isSuccess);
  },[isSuccess])
  return (
    <React.Fragment>
      {!open && token ? (
        <div className="flex flex-col justify-start items-center ">
          <div className="bg-[#FFFFFF] shadow-xl w-3/12 p-10  mt-40">
            <Link className="flex justify-center items-center gap-2 ">
              <BsTrello className="text-2xl font-bold bg-white  text-blue-500" />
              <h1 className="text-3xl font-bold">Trello</h1>
            </Link>
            <h2 className="mt-2 text-center text-lg font-medium leading-9 tracking-tight text-gray-900">
              Sign up to continue
            </h2>
            <div className="mt-2  ">
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <span>{email}</span>
                <div className="mt-2">
                  <input
                    
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="block w-full rounded-sm  border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-[#0c66e4] focus:transition-all sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="block w-full rounded-sm  border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-[#0c66e4] focus:transition-all sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-sm bg-[#0c66e4] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#124ea1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <div className="bg-[#FFFFFF] shadow-xl w-3/12 p-8 pb-4 mt-[10rem]   ">
            <Link className="flex justify-center items-center gap-2">
              <BsTrello className="text-2xl font-bold bg-white  text-blue-500" />
              <h1 className="text-3xl font-bold">Trello</h1>
            </Link>
            <h2 className="mt-2 text-center text-base font-medium leading-9 tracking-tight text-gray-900">
              Check your inbox to log in
            </h2>
            <div className="flex  flex-col my-4 ">
              <img
                src={emailImg}
                className="mb-4 h-20 w-auto object-contain "
                alt=""
              />
              <span className="text-sm mb-4 px-4">
                To complete setup and log in, click the verification link in the
                email we’ve sent to
              </span>
              <span className="mb-6">{email}</span>
              <button className="text-sm text-blue-500">
                Resend verification email
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default VerifyEmail;
