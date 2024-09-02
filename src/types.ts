export type Address = {
  street: string;
  city: string;
  zip: string;
  country: string;
};

export type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  address: Address;
  phone: string;
  gender: string;
  major: string;
  enrolledDate: string;
  status: string;
  image: string;
  courses: string[];
  gpa: number;
};
