import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, PizzaBlock, SortPopup } from "../components";
import { setCategory } from "../redux/actions/filters";

const cagegories = ["Мясные", "Вегерианская", "Гриль", "Острые", "Закрытые"];
const sorts = [
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={cagegories} onClickItem={onSelectCategory} />
        <SortPopup items={sorts} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
