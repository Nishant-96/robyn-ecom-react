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
        wishlistItems: action.payload.productsList,
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

    case "MOVE_TO_WISHLIST":
      state = {
        ...state,
        wishlistItems: state.wishlistItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inWishlist: !curr.inWishlist };
          }
          return curr;
        }),
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
