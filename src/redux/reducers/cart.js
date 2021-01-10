const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => val[key], obj[firstKey]);
};

const getTotalSum = (obj, property) => {
  // items ({key:value}) -> value: { items ([]), totalPrice, totalCount }
  return Object.keys(obj).reduce((sum, keyId) => {
    const value = _get(obj[keyId], property);
    return value + sum;
  }, 0);
};

const getItemTotalPrice = (arr) =>
  arr.reduce((sum, pizza) => pizza.price + sum, 0);

const getCurrentItems = (oldItems, id, innerItems) => {
  const current = {
    items: innerItems,
    totalCount: innerItems.length,
    totalPrice: getItemTotalPrice(innerItems),
  };
  return {
    ...oldItems,
    [id]: current,
  };
};

const getCurrentState = (oldState, currentItems) => {
  return {
    ...oldState,
    items: currentItems,
    totalCount: getTotalSum(currentItems, "items.length"),
    totalPrice: getTotalSum(currentItems, "totalPrice"),
  };
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...initialState };

    case "REMOVE_CART_ITEM": {
      const newItems = { ...state.items };
      const currentTotalCount = newItems[action.payload].totalCount;
      const currentTotalPrice = newItems[action.payload].totalPrice;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    }

    case "PLUS_CART_ITEM": {
      const currentPizzaItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const currentItems = getCurrentItems(
        state.items,
        action.payload,
        currentPizzaItems
      );

      return getCurrentState(state, currentItems);
    }

    case "MINUS_CART_ITEM": {
      const currentPizzaItems = state.items[action.payload].items.slice(1);

      const currentItems = getCurrentItems(
        state.items,
        action.payload,
        currentPizzaItems
      );

      if (!currentPizzaItems.length) delete currentItems[action.payload];

      return getCurrentState(state, currentItems);
    }

    case "ADD_PIZZA_CART": {
      const { id } = action.payload;

      const currentPizzaItems = state.items[id]
        ? [...state.items[id].items, action.payload]
        : [action.payload];

      const currentItems = getCurrentItems(state.items, id, currentPizzaItems);

      return getCurrentState(state, currentItems);
    }
    default:
      return state;
  }
};

export default cart;
