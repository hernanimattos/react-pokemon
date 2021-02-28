import React from "react";
import { connect } from "react-redux";
import Card from "../components/card/Card";
import MainContainer from "./MainContainer";

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const CardContainerConect = ({ data }) => {
  const { results } = data;

  return (
    <MainContainer>
      {results && results.map((props) => <Card {...props} key={props.name} />)}
    </MainContainer>
  );
};
const CardContainer = connect(mapStateToProps)(CardContainerConect);

export default CardContainer;
