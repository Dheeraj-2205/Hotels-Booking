"use client";

import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const notify = (a) => toast.success(a);
  const errorNotify= (a) => toast.error(a)


  const handlesignUp = async() => {
    const res = await axios.post(`/api/user/register`, {name,email,password});

    if(res?.data){
      Cookies.set('user' , res.data.token , {expires : 7});

      alert(res?.data.message)
      router.back()
    }
  };

  const handleLogin = async() => {
    setLogin(true);

    try {
      const res = await axios.post(`/api/user/login`, {email,password});

      if(res?.data){
        Cookies.set('user' , res.data.token ,{expires : 7})
        notify(res?.data.message)
        router.back()
      }
    } catch (error) {
      errorNotify("Wrong Credentials")
      
    }
  };

  const handleToggle = () =>{
    setLogin(!login)
  }
  return (
    <div>
      <Head>
        <title>DAWN Login</title>
      </Head>
      <Toaster/>
      <div className=" bg-loginBackGround bg-no-repeat bg-cover flex h-screen justify-center items-center relative">
        <div className=" text-white opacity-80 absolute w-full top-10 px-20 flex items-center">
          <h2 className=" text-4xl font-bold mr-5">Hotels </h2>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div>
            <p className=" font-bold text-5xl text-justify">
              There is a ways to hotels around
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi, odio itaque dicta atque eligendi molestias officia hic
              minima est explicabo cupiditate dolor sit, harum ullam vitae
              voluptatem deleniti tempore.
            </p>
          </div>
          <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-orange-600 to bg-orange-400 font-bold text-white">
              Sign Up & get your hotel
            </p>
            <div className="px-10">
              <h3 className=" text-4xl font-bold my-5">Login / SignUp</h3>
              <p className="font-bold text-lg mb-1">
                Please Enter Your Phone Number To Continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter Your Name...."
                  className=" outline-none border border-black px-3 py-1 w-96 h-10 my-3"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter Your Email...."
                className=" outline-none border border-black px-3 py-1 w-96 h-10 my-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Password...."
                className=" outline-none border border-black px-3 py-1 w-96 h-10 my-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-96 h-14 text-lg font-bold bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-white my-5 rounded-lg"
                onClick={login ? handleLogin :  handlesignUp}
              >
                {
                  login ? "Login" : "Sign Up"
                }
              </button>
              <p className=" my-1 text-lg">
                <span>{login ? "Don't Have An Account.. ?" : "Already Have An Account" }</span>
                <span className=" ml-1 border-b-2 border-blue-500 text-blue-600 pb-1 hover:cursor-pointer " onClick={handleToggle}>
                {
                  login ? "Sign Up" : "Login"
                }
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
