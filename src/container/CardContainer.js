import React from "react";
import { connect } from "react-redux";
import Card from "../components/card/Card";
import MainContainer from "./MainContainer";

const mapStateToProps = (state) => {

  return {
    data: state.data,
    pokemons: state.pokemons
  };
};

const CardContainerConect = ({data, pokemons}) => {
  const isList  = Array.isArray(pokemons) && pokemons.length > 0
  return (
    <MainContainer>
       { isList ? pokemons.map((props) => <Card {...props} key={props.name} />):
       <Card {...data}/>}
    </MainContainer>
  );
};
const CardContainer = connect(mapStateToProps)(CardContainerConect);

export default CardContainer;
