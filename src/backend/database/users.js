import { v4 as uuid } from "uuid";

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const users = [
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Rawat",
    email: "abhirawat123@gmail.com",
    password: "Abcd@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
