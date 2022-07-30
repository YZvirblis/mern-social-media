interface IPost {
  _id: string;
  userID: string;
  desc: string;
  img: string;
  likes: string[];
  createdAt: Date;
}

export default IPost;
