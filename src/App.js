import React, { useEffect, useState } from "react";
import { searchProxy } from "./store/actions";
import { connect } from "react-redux";
import CardContainer from "./container/CardContainer";
import Details from "./components/details/Details";
import Menu from "./container/menu/Menu";
import Http from "./provider/Http";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

const mapStateToDispatch = (dispatch) => {
  return {
    searchProxy: (type, term) => dispatch(searchProxy(type, term)),
  };
};

const AppConnect = ({ searchProxy }) => {
  const [pokemons, setPockemons] = useState([]);
  const [term, setTerm] = useState("");
  const [typeSearch, setTypeSearch] = useState("number");

  useEffect(() => {
    Http.get("pokemon?limit=20&search=true")
      .then((response) => {
        const { data } = response;
        const { results } = data;

        return results;
      })
      .then((resp) => {
        // eslint-disable-next-line no-undef
        Promise.all(resp.map((result) => axios.get(result.url))).then((res) => {
          const pokemons = res.map((p) => p.data);

          setPockemons(pokemons);
        });
      })
      .catch((e) => {
        console.log(e);
      });
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

const App = connect(null, mapStateToDispatch)(AppConnect);

export default App;
