export interface careerCard {
  addressLine1: string;
  addressLine2: string;
  alreadyApplied: false;
  city: string;
  companyName: string;
  country: string;
  creationDate: number;
  description: string;
  education: string;
  employerEmail: string;
  employerName: string;
  employerPhoneNumber: string;
  experience: string;
  jobTitle: string;
  jpId: number;
  pinCode: string;
  state: string;
  updatedDate: number;
  _links: {
    coverImage: { href: string };
  };
}
