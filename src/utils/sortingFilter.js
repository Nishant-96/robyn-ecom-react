function sortingFilter(state, value) {
  switch (value) {
    case "low-to-high":
      return [...state.filteredItems].sort((a, b) => {
        return a.newprice - b.newprice;
      });
    case "high-to-low":
      return [...state.filteredItems].sort((a, b) => {
        return b.newprice - a.newprice;
      });
    default:
      break;
  }
}

export default sortingFilter;
