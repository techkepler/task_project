import React, { useState } from "react";

const NewUser = ({ isAddUser, setIsAddUser }) => {
  const intialData = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: "",
  };

  const [userData, setUserData] = useState(intialData);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    setTimeout(() => {
      setIsAddUser(false);
      setUserData(intialData);
      window.scrollTo(0, 0);
    }, 500);

    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  };

  return (
    <>
      {isSubmit && (
        <div className="flex items-center justify-center">
          <p className="bg-green-500 text-slate-700 rounded-md fixed top-2 w-80 md:w-[26rem] py-2 text-center">
            User Created Successfully
          </p>
        </div>
      )}
      <section
        className={`absolute w-full  transition-transform duration-200 ease-linear origin-top ${
          isAddUser ? " flex justify-center items-center scale-100" : "scale-0"
        }`}
      >
        <form className="w-[30rem] md:w-[50rem]  flex flex-col gap-6 bg-slate-200 mt-5 px-10 py-6 rounded-md">
          <h1 className="text-center mb-5 fonst-bold text-3xl text-slate-700">
            Create New User
          </h1>
          <div className="flex flex-wrap w-full gap-6 ">
            <div className="name  w-full md:w-[48%]">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-sm form-input"
                required
                value={userData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
            <div className="username  w-full md:w-[48%]">
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full rounded-sm form-input"
                required
                value={userData.username}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
          </div>{" "}
          <div className="flex flex-wrap w-full gap-6">
            <div className="email  w-full md:w-[48%]">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-sm form-input"
                required
                value={userData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
            <div className="phone  w-full md:w-[48%]">
              <label htmlFor="phone" className="block">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full rounded-sm form-input"
                required
                value={userData.phone}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
          </div>
          <div className="flex flex-wrap w-full gap-6">
            <div className="website  w-full md:w-[48%]">
              <label htmlFor="website" className="block">
                Website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                className="w-full rounded-sm form-input"
                required
                value={userData.website}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
            <div className="address  w-full md:w-[48%]">
              <label htmlFor="address" className="block">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full rounded-sm form-input"
                required
                value={userData.address}
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
          </div>
          <div className="my-6 flex justify-center items-center">
            <button
              className="bg-slate-600 w-full md:w-96 rounded-md py-3 px-2 text-white"
              disabled={
                !userData.name ||
                !userData.username ||
                !userData.email ||
                !userData.phone ||
                !userData.website ||
                !userData.address
              }
              onClick={onFormSubmit}
            >
              Create Account
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewUser;
