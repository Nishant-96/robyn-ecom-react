import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Nishant",
    lastName: "Pratihast",
    email: "nishant@gmail.com",
    password: "nishant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "Test",
    email: "test@gmail.com",
    password: "test12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
