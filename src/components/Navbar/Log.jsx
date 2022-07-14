import React from "react";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <Link to="/login" className="flex">
      <div className="text-4xl mt-1">
        <ion-icon name="contact"></ion-icon>
      </div>
      <div className="my-auto px-3 uppercase text-sm">Login/Signup</div>
    </Link>
  );
};

export default Log;
