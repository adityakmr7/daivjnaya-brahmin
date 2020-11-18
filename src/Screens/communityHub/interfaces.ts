export type postNewHubProps = {
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    latitude: string;
    longitude: 0;
    pincode: string;
    state: string;
  };
  city: string;
  email: string;
  cover: string;
  facilities: string;
  location: {
    latitude: number;
    locationName: string;
    longitude: number;
  };
  gallery: [string];
  name: string;
  phoneNumber: string;
  isCallback: boolean;
  isAcceptTmc: boolean;
  yourName: string;
};
