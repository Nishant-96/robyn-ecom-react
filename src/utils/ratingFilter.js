function ratingFilter(state, value) {
    if (state.selectedCategories.length === 0) {
      return state.defaultItems.filter((curr) => curr.rating >= value);
    } else {
      return state.filteredItems.filter((curr) => curr.rating >= value);
    }
  }

  export default ratingFilter;