import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";
import "./scss/app.scss";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas?_order=asc&_sort=price")
      .then(({ data }) => dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Route path="/" render={() => <Home pizzas={pizzas} />} exact /> */}
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas.pizzas,
//   };
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     setPizzas: (pizzas) => dispatch(setPizzas(pizzas)),
// //   };
// // };

// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
