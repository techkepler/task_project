import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { load_user } from "../GraphQl/query";

const UserDetails = (props) => {
  const { searchQuery } = props;
  const { error, loading, data } = useQuery(load_user);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (error) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    if (data) {
      setUser(data.users.data);
    }
  }, [data, loading, error]);

  const onCheckBoxChange = (e, id) => {
    const { checked } = e.target;

    if (id === "parentCheckBox") {
      let myUser = user.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUser(myUser);
    } else {
      let myUser = user.map((user) =>
        user.id === id ? { ...user, isChecked: checked } : user
      );
      setUser(myUser);
    }
  };

  const filterData = () => {
    let newData = user.map((data) => {
      return { ...data, website: `www.${data.website}` };
    });
    if (searchQuery) {
      newData = newData.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.phone
            .toString()
            .includes(searchQuery.toString().toLowerCase()) ||
          user.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.address.street.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return newData;
  };

  return (
    <div className="flex flex-col w-full mt-6 mb-10  ">
      {/* table head */}
      <ul className=" w-full flex justify-around bg-slate-100 py-3 px-6 font-semibold text-sm gap-4">
        <li className="w-[3%]">
          <input
            type="checkbox"
            className="form-checkbox"
            value="parent"
            onChange={(e) => onCheckBoxChange(e, "parentCheckBox")}
            checked={user.every((user) => user.isChecked === true)}
          />
        </li>
        <li className="w-[15%] ml-3">Name</li>
        <li className="w-[11%]">Username</li>
        <li className="w-[20%]">Email</li>
        <li className="w-[13%] ml-3">Phone</li>
        <li className="w-[13%]">Website</li>
        <li className="w-[15%] ml-5">Address</li>
      </ul>

      {/* table body */}

      <div className=" bg-white">
        {isError && (
          <p className="my-5 text-lg lg:text-2xl text-center text-red-500 font-semibold">
            Some Error Occured.
          </p>
        )}

        {isLoading ? (
          <div className="text-lg text-center my-5 font-semibold">
            Loading.....
          </div>
        ) : (
          <>
            {filterData()?.map((item) => (
              <ul
                key={item.id}
                className="flex w-full justify-around items-center px-6 py-4 border-b   text-xs  text-slate-800 font-medium lg:font-normal my-4 gap-4"
              >
                <li className="w-[3%]">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="child"
                    checked={item?.isChecked || false}
                    onChange={(e) => onCheckBoxChange(e, item.id)}
                  />
                </li>
                <li className="w-[15%] ml-3">{item.name}</li>
                <li className="w-[11%]">{item.username}</li>
                <li className="w-[20%] break-words">{item.email}</li>
                <li className="w-[13%] ml-3">{item.phone}</li>
                <li className="w-[13%] ml-2">{item.website}</li>
                <li className="w-[15%] ml-5 break-words">
                  {item.address.street}
                </li>
              </ul>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
