import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = ({ category, sortBy }) => (dispatch) => {
  const categoryFilter = category !== null ? `category=${category}` : "";
  const sortOrder = `&_sort=${sortBy.type}&_order=${sortBy.order}`;

  dispatch(setLoaded(false));

  axios
    .get(`/pizzas?${categoryFilter}${sortOrder}`)
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (pizzas) => ({
  type: "SET_PIZZAS",
  payload: pizzas,
});
