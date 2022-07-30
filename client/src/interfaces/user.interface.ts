interface IUser {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  followers?: string[];
  following?: string[];
  isAdmin?: boolean;
  description: string;
  city: string;
  from: string;
  relationship: number;
  id: any;
}

export default IUser;
