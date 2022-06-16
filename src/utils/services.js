import axios from "axios";

export const getWishList = async (token, dispatch) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({
        type: "GET_WISHLIST",
        payload: { value: response.data.wishlist },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const postAddToWishListService = async (token, product, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      dispatch({ type: "POST_TO_WISHLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFromWishListService = async (token, productId, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({ type: "POST_TO_WISHLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCartList = async (token, dispatch) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({
        type: "GET_CARTLIST",
        payload: { value: response.data.cart },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const postAddToCartService = async (token, product, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      dispatch({ type: "POST_TO_CARTLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFromCartService = async (token, productId, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({ type: "POST_TO_CARTLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const cartItemQtyService = async (
  token,
  productId,
  { type },
  dispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: type,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      dispatch({ type: "POST_TO_CARTLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearCartItemService = async (cartArr, token, dispatch) => {
  try {
    dispatch({ type: "CLEAR_MY_CART", payload: { value: [] } });
    const response = await (async () => {
      for (let item of cartArr) {
        const res = await deleteOneItemFromCart(item._id, token);
        if (res.data.cart.length === 0) {
          return res;
        }
      }
    })();
    if (response.status === 200) {
      dispatch({ type: "POST_TO_CARTLIST" });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteOneItemFromCart = async (productId, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
