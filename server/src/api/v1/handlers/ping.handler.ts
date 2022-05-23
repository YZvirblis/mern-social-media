import config from "config";

const sendMePong = () => {
  return config.get("TEST.message");
};

export { sendMePong };
