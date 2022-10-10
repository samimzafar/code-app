import { getItem, setItem } from "./LocalStorage.Services";
const userKey = "userKey";

export const addUser = (data) => {
  let user = getItem(userKey);
  user = user ? user : [];
  user.push(data);
  console.log("user", user);

  setItem(userKey, user);
};

export const getUser = () => {
  let user = getItem(userKey);
  user = user ? user : [];
  return user;
};
