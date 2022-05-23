import User from "../models/user.model";
import bcrypt from "bcrypt";
import IUser from "../interfaces/user.interface";

const getUserHandler = async (id: string) => {
  try {
    const user: any = await User.findById(id);
    const { password, updatedAt, ...other } = user._doc;
    return { message: other, status: 200 };
  } catch (err: any) {
    return { message: err.message, status: 500 };
  }
};

const registerUserHandler = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    // GENERATE HASHED PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE NEW USER
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // SAVE USER TO DB
    await newUser.save();
    return { message: newUser, status: 201 };
  } catch (err: any) {
    if (err.code === 11000) {
      return { message: "User already exists.", status: 409 };
    } else {
      return { message: "Something went wrong.", status: 400 };
    }
  }
};

const loginUserHandler = async (username: string, password: string) => {
  try {
    const user: IUser | null = await User.findOne({ username });
    if (!user) {
      return { message: "User not found", status: 404 };
    } else {
      const validPassword = bcrypt.compare(password, user.password);
      if (!validPassword) {
        return { message: "Password is incorrect", status: 400 };
      } else {
        return { message: user, status: 200 };
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUserHandler = async (paramID: string, user: IUser) => {
  if (user.id === paramID || user.isAdmin) {
    if (user.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      } catch (err) {
        console.log("BCRYPT ERROR: ", err);
      }
    }
    try {
      await User.findByIdAndUpdate(paramID, {
        $set: user,
      });
      return { message: "Account has been updated", status: 200 };
    } catch (err) {
      console.log(err);
    }
  } else {
    return { message: "You cannot update someone elses account.", status: 403 };
  }
};

const deleteUserHandler = async (paramID: string, user: IUser) => {
  if (user.id === paramID || user.isAdmin) {
    try {
      //@ts-ignore
      await User.findByIdAndDelete(paramID);
      return { message: "Account has been deleted", status: 200 };
    } catch (err) {
      console.log(err);
    }
  } else {
    return { message: "You cannot delete someone elses account.", status: 403 };
  }
};

const followUserHandler = async (paramID: string, userID: string) => {
  if (paramID !== userID) {
    try {
      const user = await User.findById(paramID);
      const currentUser = await User.findById(userID);
      if (!user?.followers?.includes(userID)) {
        await user?.updateOne({ $push: { followers: userID } });
        await currentUser?.updateOne({ $push: { following: paramID } });
        return { message: "User has been followed.", status: 200 };
      } else {
        return { message: "You already follow this user.", status: 403 };
      }
    } catch (err) {
      console.log(err);
      return { message: err, status: 500 };
    }
  } else {
    return { message: "You can't follow yourself.", status: 403 };
  }
};

const unfollowUserHandler = async (paramID: string, userID: string) => {
  if (paramID !== userID) {
    try {
      const user = await User.findById(paramID);
      const currentUser = await User.findById(userID);
      if (user?.followers?.includes(userID)) {
        await user?.updateOne({ $pull: { followers: userID } });
        await currentUser?.updateOne({ $pull: { following: paramID } });
        return { message: "User has been unfollowed.", status: 200 };
      } else {
        return { message: "You don't follow this user.", status: 403 };
      }
    } catch (err) {
      console.log(err);
      return { message: err, status: 500 };
    }
  } else {
    return { message: "You can't unfollow yourself.", status: 403 };
  }
};

export {
  getUserHandler,
  registerUserHandler,
  loginUserHandler,
  updateUserHandler,
  deleteUserHandler,
  followUserHandler,
  unfollowUserHandler,
};
