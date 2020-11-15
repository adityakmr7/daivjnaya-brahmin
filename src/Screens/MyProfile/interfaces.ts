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

export type friendListProps = {
  uId: number;
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
  _links: {
    profilePic: {
      href: string;
    };
  };
};

export type postDataType = {
  content: string | null;
  latitude: string | null;
  longitude: string | null;
  location: string | null;
  url: string | null;
};

export type postDataProps = {
  content: string;
  createdDate: number;
  files: [
    {
      _links: { url: { href: string } };
    }
  ];
  isLiked: boolean;
  lastModifiedDate: number;
  location: {
    latitude: number;
    locationId: number;
    locationName: string;
    longitude: number;
  };
  postId: number;
  totalComments: number;
  totalLikes: number;
  username: string;
};
