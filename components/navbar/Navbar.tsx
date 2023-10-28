import React from "react";
import NavMenu from "./NavMenu";
import ActionButtons from "./Action-Buttons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b">
      <div>
        <h2 className="text-5xl font-bold py-4">quill.</h2>
      </div>
      <NavMenu />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
