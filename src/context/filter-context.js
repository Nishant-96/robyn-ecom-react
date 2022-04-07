import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

import reducerFunc from "../utils/reducerFunc";
const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const initialState = {
  defaultItems: [],
  defaultCategories: [],
  filteredItems: [],
  maxPriceRange: 1000,
  selectedCategories: [],
  selectedRating: null,
  selectedSort: null,
  selectedPrice: null,
  selectCategoryChecked: null,
  wishlistItems: [],
  cartItems: [],
  searchInput: "",
  searchedProducts: [],
};

const FilterProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    (async () => {
      try {
        const responseOne = await axios.get("/api/products");
        const responseTwo = await axios.get("/api/categories");
        dispatch({
          type: "DEFAULT",
          payload: {
            productsList: responseOne.data.products,
            categoriesList: responseTwo.data.categories,
          },
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
