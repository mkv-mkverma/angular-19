export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  aboutMe?: string;
  terms?: boolean;
}

export interface UserProfile extends User {
  age?: number;
  imageUrl?: string;
  address?: {
    city: string;
    state: string;
    zip: string;
  };
}

export interface Person {
  id: number;
  name: string;
  email: string;
  aboutMe: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  imageUrl?: string;
}
