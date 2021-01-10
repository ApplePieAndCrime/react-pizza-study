const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      };

      const allPizzas = [].concat(...Object.values(newItems));

      return {
        ...state,
        items: newItems,
        // Альтернатива: Object.values(newItems).reduce((len, el) => el.length + len, 0)
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, pizza) => pizza.price + sum, 0),
      };
    }
    default:
      return state;
  }
};

export default cart;
