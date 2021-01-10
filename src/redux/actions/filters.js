export const setSortBy = (payload) => ({
  type: "SET_SORT_BY",
  payload,
});

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
