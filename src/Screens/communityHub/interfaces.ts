export type postNewHubProps = {
  city: string;
  email: string;
  location: {
    latitude: number;
    locationName: string;
    longitude: number;
  };
  name: string;
  phoneNumber: string;
};
