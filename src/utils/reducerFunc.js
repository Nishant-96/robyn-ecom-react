import rangeFilter from "./rangeFilter";
import categoryFilter from "./categoryFilter";
import ratingFilter from "./ratingFilter";
import sortingFilter from "./sortingFilter";
function reducerFunc(state, action) {
  switch (action.type) {
    case "DEFAULT":
      return {
        ...state,
        defaultItems: action.payload.productsList,
        defaultCategories: action.payload.categoriesList,
        filteredItems: action.payload.productsList,
      };

    case "CATEGORIES_FILTER":
      state = {
        ...state,
        selectedCategories: [
          ...(state.selectedCategories.includes(action.payload.value)
            ? state.selectedCategories.filter(
                (curr) => curr !== action.payload.value
              )
            : [...state.selectedCategories, action.payload.value]),
        ],
        selectCategoryChecked: action.payload.isChecked,
      };

      break;

    case "RATING_FILTER":
      state = {
        ...state,
        selectedRating: action.payload.value,
      };

      break;

    case "SORTING_FILTER":
      state = { ...state, selectedSort: action.payload.value };

      break;

    case "RANGE_FILTER":
      state = {
        ...state,
        selectedPrice: action.payload.value,
        maxPriceRange: action.payload.value,
      };

      break;

    case "CLEAR_FILTER":
      state = {
        ...state,
        selectedCategories: [],
        selectedRating: null,
        selectedSort: null,
        selectedPrice: null,
        selectCategoryChecked: null,
        filteredItems: [...state.defaultItems],
        maxPriceRange: 1000,
      };
      break;

    case "GET_WISHLIST":
      state = { ...state, wishlistItems: [...action.payload.value] };
      break;

    case "POST_TO_WISHLIST":
      state = { ...state, wishlistApiFlag: !state.wishlistApiFlag };
      break;

    case "GET_CARTLIST":
      state = { ...state, cartItems: [...action.payload.value] };
      break;

    case "POST_TO_CARTLIST":
      state = { ...state, cartlistApiFlag: !state.cartlistApiFlag };
      break;

    case "CLEAR_MY_CART":
      state = { ...state, cartItems: [...action.payload.value] };
      break;

    case "SET_SEARCH_INPUT":
      state = {
        ...state,
        searchInput: action.payload.value,
      };
      break;

    case "SEARCH_PRODUCT":
      state = {
        ...state,
        searchedProducts: [...state.defaultItems].filter((curr) =>
          curr.name.toLowerCase().includes(action.payload.value.toLowerCase())
        ),
      };
      break;
    default:
      break;
  }

  if (state.selectCategoryChecked !== null) {
    state = {
      ...state,
      filteredItems: categoryFilter(state),
    };
  }

  if (state.searchedProducts.length > 0) {
    state = {
      ...state,
      filteredItems: [...state.searchedProducts],
    };
  }
  if (state.selectedRating) {
    state = {
      ...state,
      filteredItems: ratingFilter(state, state.selectedRating),
    };
  }

  if (state.selectedPrice) {
    state = {
      ...state,
      filteredItems: rangeFilter(state, state.selectedPrice),
    };
  }

  if (state.selectedSort) {
    state = {
      ...state,
      filteredItems: sortingFilter(state, state.selectedSort),
    };
  }
  return { ...state };
}

export default reducerFunc;
