import { response } from "express";
import User from "../models/user.model";

const getUserHandler = () => {
  return "User";
};

const registerUserHandler = async (
  username: string,
  email: string,
  password: string
) => {
  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    const user = await newUser.save();
    return user;
  } catch (err) {
    console.log(err);
  }
};

export { getUserHandler, registerUserHandler };
