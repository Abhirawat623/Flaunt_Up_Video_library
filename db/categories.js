import { v4 as uuid } from "uuid";



export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    videoCategory: "all"
  },
  {
    _id: uuid(),
    categoryName: "Trending",
    videoCategory: "trending"
  },
  {
    _id: uuid(),
    categoryName: "Smart Wearables",
    videoCategory: "wearables"
  },
  {
    _id: uuid(),
    categoryName: "Smart Phones",
    videoCategory: "phone"
  },
  {
    _id: uuid(),
    categoryName: "Laptops",
    videoCategory: "laptop"
  }
];