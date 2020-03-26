interface IGuestOptional {
  conversation: boolean;
  religious: boolean;
  mda: boolean;
  guidelines: boolean;
  sentToKabala: boolean;
  released: boolean;

  roomNum: number;
  numChildren: number;

  releaseDate: Date;
  hafnayaTime: Date;
  collectingDate: Date;
  receptionTime: Date;
  arrivingTime: Date;
  birthDate: Date;

  collectingAddress: string;
  origin: string;
  sourceHospital: string;
  apotropus: string;
  birthCountry: string;
  language: string;
  allergies: string;
  contactPhone: string;
  altContactPhone: string;
  foodRestrictions: string;
  familyStatus: string;
  sex: string;
  IDNumber: string;

  kupatHolim: string;
  status: string;
  comments: string;
  disabilities: string;
}

export interface IGuest extends Partial<IGuestOptional> {
  // Required !!!
  firstName: string;
  lastName: string;
  serialNumber: number;
  hotelName: string;
  hotel: string; // mongoose schema uuid
  phone: string;
  address: string;
  city: string;
}
