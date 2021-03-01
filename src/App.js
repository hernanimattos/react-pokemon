import React, { useEffect, useState } from "react";
import { searchProxy, chargeMainPage } from "./store/actions";
import { connect } from "react-redux";
import CardContainer from "./container/CardContainer";
import Details from "./components/details/Details";
import Menu from "./components/menu/Menu";
import Http from "./provider/Http";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

const mapStateToDispatch = (dispatch) => {
  return {
    searchProxy: (type, term) => dispatch(searchProxy(type, term)),
    chargeMainPage: () => dispatch(chargeMainPage())
  };
};

const mapStateToProps = (state) => {
  console.log(state, "---")

return {
  pokemons: state.data
}

}

const AppConnect = ({ searchProxy, chargeMainPage, pokemons }) => {

  console.log(pokemons, ' ---o-o-o-')
  // const [pokemons, setPockemons] = useState([]);
  const [term, setTerm] = useState("");
  const [typeSearch, setTypeSearch] = useState("name");

  useEffect(() => {
    chargeMainPage()

  }, []);

  return (
    <BrowserRouter>
      <Menu
        getTerm={(e) => setTerm(e.target.value)}
        submit={() => searchProxy(typeSearch, term)}
        getTypeSearch={(e) => setTypeSearch(e.target.value)}
        type={typeSearch}
      />

      <Switch>
        <Route path="/" exact>
          <CardContainer pokemons={pokemons} />
        </Route>
        <Route path="/:id" exact>
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const App = connect(mapStateToProps, mapStateToDispatch)(AppConnect);

export default App;
