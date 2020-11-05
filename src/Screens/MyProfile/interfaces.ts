export type userProfileProps = {
  city: string;
  companyName: string;
  phoneNumber: string;
  about: string;
  address: string;
  designation: string;
  education: string;
  email: string;
  firstName: string;
  interest: string;
  isEnabled: boolean;
  isFriend: boolean;
  isFriendRequested: boolean;
  lastName: string;
  livesIn: string;
  pincode: string;
  state: string;
};

export type postDataType = {
  content: string | null;
  latitude: string | null;
  longitude: string | null;
  location: string | null;
  url: string | null;
};
