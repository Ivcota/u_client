import React from "react";
import Logout from "./LogOut";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.google.com">About</a>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
