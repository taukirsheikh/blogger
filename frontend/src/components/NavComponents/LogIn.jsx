import React from "react";

function LogIn() {
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
          <h6 className="font-bold text-lg">Email</h6>
          <input
            type="email"
            placeholder="hero@gmail.com"
            className="input input-bordered input-sm w-full max-w-xs"
            required
          />
          <h6 className="font-bold text-md">Password</h6>
          <input
            type="text"
            placeholder="#######"
            className="input input-bordered input-sm w-full max-w-xs"
            required
          />
          <div className="modal-action">
            <button className="btn btn-primary">Log In</button>
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

export default LogIn;
