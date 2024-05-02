import React from "react";
import { useState } from "react";
import axios from "axios"; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login as userLogin, logout as userLogout } from "../../redux/authorSlice";

function LogIn() {
  const dispatch= useDispatch()
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
  const handleSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/login/", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        console.log(response.data)
        dispatch(userLogin(response.data))
        setLoading(false)
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  
  return (
    <div>
      <button
        className="btn  border-zinc-500 border-2 "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Log In
      </button>
      <dialog
        id="my_modal_2"
        className="modal"
      >
        <div className="modal-box">
          <form onSubmit={handleSubmit}>

          <h6 className="font-bold text-lg">Email</h6>
          <input
            type="email"
            placeholder="hero@gmail.com"
            className="input input-bordered input-sm w-full max-w-xs"
            required
            onChange={(e) => setEmail(e.target.value)}
            />
          <h6 className="font-bold text-md">Password</h6>
          <input
            type="text"
            placeholder="#######"
            className="input input-bordered input-sm w-full max-w-xs"
            required
            onChange={(e) => setPassword(e.target.value)}
            />
          <div className="modal-action">
            <button className="btn btn-primary " type="submit">Log In</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" >Close</button>
            </form>
          </div>
            </form>
            {loading ? (<span className="loading loading-dots loading-xs"></span>):null}
        </div>
      </dialog>
    </div>
  );
}

export default LogIn;
