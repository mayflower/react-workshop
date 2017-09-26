import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
import FlatButton from "material-ui/FlatButton";
import { Card, CardTitle, CardText } from "material-ui/Card";

const App = props => {
  const headlineStyle = {
    display: props.value > 0 ? "block" : "none"
  };
  return (
    <Card>
      <CardTitle title="Simple click counter" subtitle="Click - or + button" />
      <CardText>
        <p style={headlineStyle}>Du hast schon {props.value} mal geklick</p>
        <FlatButton onClick={props.onDecrement} label="-" />
        <FlatButton primary onClick={props.onIncrement} label="+" />
      </CardText>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
