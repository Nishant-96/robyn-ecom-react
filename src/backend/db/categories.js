import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Horror",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Science Fiction",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Superhero",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Humor",
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/9/50/623b2dbd2579d/clean.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Manga",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
  },
];
