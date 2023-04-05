interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "randomUser1",
    email: "randomUser1@ee.com",
  },
  {
    id: 2,
    name: "randomUser2",
    email: "randomUser2@ee.com",
  },
];

export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getUsers = (): User[] => {
  return users;
};
