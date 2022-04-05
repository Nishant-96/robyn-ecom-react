function categoryFilter(state) {
    if (state.selectedCategories.length > 0) {
      return state.defaultItems.filter((currEl) => {
        for (let i = 0; i < state.selectedCategories.length; i++) {
          if (currEl.category.includes(state.selectedCategories[i])) {
            return currEl;
          }
        }
      });
    } else {
      return state.defaultItems;
    }
  }

  export default categoryFilter;