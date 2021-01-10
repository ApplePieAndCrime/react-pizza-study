import React from "react";
import { Route } from "react-router-dom";

import "./scss/app.scss";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
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
