import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Horror",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/4/70/61f018d6d9799/portrait_uncanny.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Science Fiction",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/4/70/61f018d6d9799/portrait_uncanny.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Superhero",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/4/70/61f018d6d9799/portrait_uncanny.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Humor",
    imgUrl: "",
  },
  {
    _id: uuid(),
    categoryName: "Manga",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/4/70/61f018d6d9799/portrait_uncanny.jpg",
  },
];
