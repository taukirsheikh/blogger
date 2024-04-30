import React from "react";

function Register() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
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
            placeholder="your name"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          <h6 className="font-bold text-md">Email</h6>
          <input
            type="text"
            placeholder="hero@fmail.com"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          <h6 className="font-bold text-md">Password</h6>
          <input
            type="text"
            placeholder="#######"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          <div className="modal-action">
            <button className="btn btn-primary">Register</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Register;
