"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
    },
];
const getUserById = (id) => {
    return users.find((user) => user.id === id);
};
exports.getUserById = getUserById;
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
