import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import UserDetails from "./UserDetails";
import NewUser from "./NewUser";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUser, setIsAddUser] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center pt-5 px-6 ">
        <h1 className="text-xl font-semibold">Users</h1>
        <div className="flex items-center  relative">
          <input
            type="search"
            name="search"
            id="search"
            className="w-80 lg:w-96 form-input rounded-3xl py-2.5"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <span className="absolute w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full right-2">
            <AiOutlineSearch className="text-xl cursor-pointer" />
          </span>
        </div>
        <button
          className={`${
            isAddUser ? "bg-red-700" : "bg-gray-800"
          }  py-2 px-2 rounded-md text-white flex items-center`}
          onClick={() => setIsAddUser(!isAddUser)}
        >
          <BiPlus className="inline-block mr-2 text-xl" />
          <span>New User</span>
        </button>
      </div>

      <NewUser isAddUser={isAddUser} setIsAddUser={setIsAddUser} />
      <UserDetails searchQuery={searchQuery} />
    </>
  );
};

export default Header;
