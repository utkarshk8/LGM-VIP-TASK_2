import React from "react";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main" className="absolute top-[20%] left-[15%]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" className="grid grid-cols-3">
      {users.map((user) => (
        <div className="flex flex-col justify-center items-center w-[260px] rounded-[20px] overflow-none my-4 p-2 bg-stone-100">
          <div className="w-[100%] h-auto m-0 p-0 rounded-[20px] ">
            <ImageShadow
              shadowBlur={15}
              shadowRadius={15}
              src={user.avatar}
              alt="Product"
              width="100%"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h2 className="product_name text-xl font-bold tracking-wide leading-9 font-poppins mt-6">
            {user.first_name} {user.last_name}
          </h2>

          <p className="mt-2 text-center w-full text-sm font-mono leading-4 font-medium">
            {user.email}
          </p>
          <p className="mt-2 text-center w-full text-sm font-mono leading-4 font-medium">
            User Id: {user.id}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
