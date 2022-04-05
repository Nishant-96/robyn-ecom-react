function rangeFilter(state, value) {
  if (state.selectCategoryChecked !== null || state.selectedRating !== null) {
    return state.filteredItems.filter((curr) => {
      return curr.newprice <= value;
    });
  } else {
    return state.defaultItems.filter((curr) => {
      return curr.newprice <= value;
    });
  }
}

export default rangeFilter;
