import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-base-content/10">
      <div className="mx-auto max-w-7xl p-4 flex justify-between">
        <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">ThinkBoard</h1>
        </div>
       <div className="flex items-center gap-4">
        <Link to={"/create"} className="btn btn-primary" >
          <PlusIcon className="h-5 w-5" />
          <span>New Note</span>
        </Link>
       </div>
      </div>
    </header>
  );
};

export default Navbar;

