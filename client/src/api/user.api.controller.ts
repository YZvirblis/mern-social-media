import axios from "axios";

const getUser = async (userID?: string, username?: string) => {
  const res = userID
    ? await axios.get(`/user/${userID}`)
    : await axios.get(`/user/?username=${username}`);
  return res.data;
};

const registerUser = async (user: any) => {
  try {
    const res = await axios.post(`/user/register`, user);
    console.log("RESPONSE: ", res);
    return { user: res.data };
  } catch (err) {
    //@ts-ignore
    return { error: err.response.data };
  }
};

export { getUser, registerUser };
