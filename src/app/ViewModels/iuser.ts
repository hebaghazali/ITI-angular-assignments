export interface IUser {
  name: string;
  email: string;
  phoneNumber?: string;
  address: {
    city: string;
    postalCode?: string;
    street: string;
  };
  password: string;
}
