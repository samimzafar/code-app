import React from "react";
import { Card } from "flowbite-react";
import { getUser } from "../Services/User.Services";
const Users = () => {
  let userData = getUser();
  console.log(userData);

  return (
    <div className="top-container px-6 top-padding mb-4 card-margin">
      {userData?.map((value) => {
        return (
          <Card>
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              {value.firstName}
            </h5>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {value.lastName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {value.city}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Users;
