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
        cartItems: action.payload.productsList,
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

    case "ADD_TO_CART":
      state = {
        ...state,
        cartItems: state.cartItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inCart: true, inCartQty: 1 };
          }
          return curr;
        }),
        wishlistItems: state.wishlistItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inWishlist: false };
          }
          return curr;
        }),
      };

      break;

    case "CART_TO_WISHLIST":
      state = {
        ...state,
        wishlistItems: state.wishlistItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inWishlist: true };
          }
          return curr;
        }),
        cartItems: state.cartItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inCart: false };
          }
          return curr;
        }),
      };
      break;

    case "REMOVE_FROM_CART":
      state = {
        ...state,
        cartItems: state.cartItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inCart: false, inCartQty: 0 };
          }
          return curr;
        }),
      };

      break;

    case "CART_QTY_INCREMENTER":
      state = {
        ...state,
        cartItems: state.cartItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, inCartQty: curr.inCartQty + 1 };
          }
          return curr;
        }),
      };
      break;

    case "CART_QTY_DECREMENTER":
      state = {
        ...state,
        cartItems: state.cartItems.map((curr) => {
          if (curr._id === action.payload.id) {
            return {
              ...curr,
              inCartQty: curr.inCartQty > 1 ? curr.inCartQty - 1 : 1,
            };
          }
          return curr;
        }),
      };
      break;

    case "CLEAR_YOUR_CART":
      state = {
        ...state,
        cartItems: [...state.defaultItems],
      };
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
