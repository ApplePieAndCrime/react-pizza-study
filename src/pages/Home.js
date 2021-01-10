import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaBlockPlaceholder,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = ["Мясные", "Вегерианская", "Гриль", "Острые", "Закрытые"];
const sorts = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas({ category, sortBy }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSortBy = useCallback((sortType) => {
    dispatch(setSortBy(sortType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPizzaToCart = useCallback((pizza) => {
    dispatch(addPizzaToCart(pizza));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={sorts}
          activeSortType={sortBy}
          onClickSortType={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={
                  cartItems[pizza.id] && cartItems[pizza.id].items.length
                }
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaBlockPlaceholder key={index} />)}
      </div>
    </div>
  );
};

export default Home;
