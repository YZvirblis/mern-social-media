import axios from "axios";

const upload = async (image: any) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mbnxqvfn");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/memore/image/upload",
      formData
    );
    return res.data.public_id;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong..." };
  }
};

export { upload };
