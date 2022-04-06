import ProductCard from "./components/product-card";
import "./product-listing.css";
import { useFilter } from "../../context/filter-context";
export function ProductListing() {
  const { state, dispatch } = useFilter();

  return (
    <div className="productlisting-body">
      <aside className="productlisting-body-sidenav">
        <div className="productlisting-body-sidenav-header">
          <h3>Filter</h3>
          <span
            onClick={() => {
              dispatch({ type: "CLEAR_FILTER" });
            }}
          >
            Clear
          </span>
        </div>
        <div className="productlisting-body-sidenav-price">
          <h4>Price</h4>
          <div>
            <p>100</p>
            <p>{state.maxPriceRange}</p>
          </div>
          <input
            type="range"
            name="price-range"
            className="slider slider-primary slider-circle sidenav-slider"
            min="100"
            max="1000"
            value={state.maxPriceRange}
            onChange={(event) => {
              dispatch({
                type: "RANGE_FILTER",
                payload: { value: Number(event.target.value) },
              });
            }}
          />
        </div>
        <div className="productlisting-body-sidenav-categories">
          <h4>Categories</h4>
          {state.defaultCategories.map((currentEl) => {
            return (
              <label key={currentEl._id}>
                <input
                  type="Checkbox"
                  name="categories"
                  id={currentEl.categoryName}
                  value={currentEl.categoryName}
                  checked={state.selectedCategories.includes(
                    currentEl.categoryName
                  )}
                  onChange={(event) => {
                    return dispatch({
                      type: "CATEGORIES_FILTER",
                      payload: {
                        value: event.target.value,
                        isChecked: event.target.checked,
                      },
                    });
                  }}
                />
                {currentEl.categoryName}
              </label>
            );
          })}
        </div>
        <div className="productlisting-body-sidenav-sort">
          <h4>Sort By</h4>
          <label>
            <input
              type="radio"
              name="price-sort"
              value="low-to-high"
              checked={state.selectedSort === "low-to-high" ? true : false}
              onChange={(event) => {
                dispatch({
                  type: "SORTING_FILTER",
                  payload: { value: event.target.value },
                });
              }}
            />
            Price - Low To High
          </label>
          <label>
            <input
              type="radio"
              name="price-sort"
              value="high-to-low"
              checked={state.selectedSort === "high-to-low" ? true : false}
              onChange={(event) => {
                dispatch({
                  type: "SORTING_FILTER",
                  payload: { value: event.target.value },
                });
              }}
            />
            Price - High to Low
          </label>
        </div>
        <div className="productlisting-body-sidenav-rating">
          <h4>Rating</h4>
          {[4, 3, 2, 1].map((currNum) => {
            return (
              <label key={currNum}>
                <input
                  type="radio"
                  name="rating"
                  value={currNum}
                  checked={state.selectedRating === currNum ? true : false}
                  onChange={(event) => {
                    return dispatch({
                      type: "RATING_FILTER",
                      payload: { value: Number(event.target.value) },
                    });
                  }}
                />
                {`${currNum} ${currNum === 1 ? "star" : "stars"} and above `}
              </label>
            );
          })}
        </div>
      </aside>
      <div className="productlisting-body-content">
        {state.filteredItems.map((currentEl) => {
          return <ProductCard key={currentEl._id} product={currentEl} />;
        })}
        {/* Dummy cards for better alignment */}
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
      </div>
    </div>
  );
}
