import React, { useContext } from "react";
import { Component } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../utilities/UserContext";
export default function Signin() {

const {user, setUser} = useContext(UserContext)
  const [ token, setToken ] = useState()
const navigate = useNavigate()
function handleInputChange(event) {
  setToken(event.target.value)
    
}
function handleSubmit() {
  /* () =>{
    auth.login(()=>{

    })
  } */
  if (token) {
    const data ={
      "identifiant" : token
    }
    axios.post(
      "http://localhost:8888/api/home/login",
      data,
      { "Content-Type": "application/json" }
      )
      .then(response => {
        if(response.data.message == 'login success'){
          setUser({ isLoggedIn: true, ...response.data.user });
          navigate("/reservations")
          //console.log('from signin '+user)
        }
      })
    }
    

}
 
    return (
      <section className="py-10 bg-gray-100  bg-opacity-50 h-screen">
        <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-red-500 rounded-t">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <h1 className="text-gray-600">authentification</h1>
              </div>
            </div>
          </div>
          <div className="bg-white space-y-6">
            <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center ">
              <div className="md:w-2/3 max-w-sm mx-auto">
                <label className="text-sm text-gray-400">Token</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Token"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
  
            <hr />
            <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <div className= "text-center mx-auto md:flex  gap-5">
                <button  className="text-white w-full mx-auto max-w-sm rounded text-center bg-red-600 py-2 px-4 m-2 inline-flex items-center focus:outline-none md:float-right"
                onClick={handleSubmit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  Submit
                </button>
                <Link to={"/signup"} className="text-white w-full mx-auto max-w-sm rounded text-center bg-red-600 py-2 px-4 m-2 inline-flex items-center focus:outline-none md:float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  register
                </Link>
              </div>
            </div>
  
            <hr />
          </div>
        </div>
      </section>
    );
  
}