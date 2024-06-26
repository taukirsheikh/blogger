import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/register/",
        {
          name,
          email,
          password,
        }
      );
      console.log("User registered successfully:", response.data);

      setName("");
      setEmail("");
      setPassword("");
      setState(true);
      setLoading(false);
    } catch (error) {
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Register
      </button>
      <dialog
        id="my_modal_1"
        className="modal"
      >
        <div className="modal-box">
          <h6 className="font-bold text-md">Name</h6>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-sm w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h6 className="font-bold text-md">Email</h6>
          <input
            type="email"
            placeholder="hero@gmail.com"
            className="input input-bordered input-sm w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength="2"
            required
          />
          <h6 className="font-bold text-md">Password</h6>
          <input
            type="password"
            placeholder="#######"
            className="input input-bordered input-sm w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="2"
            required
          />
          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={handleRegister}
            >
              Register
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
          {state ? <p>User Registered successfully</p> :null}
          {loading?<span className="loading loading-dots loading-xs"></span>:null}
        </div>
      </dialog>
    </div>
  );
}

export default Register;
