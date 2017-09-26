import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
import FlatButton from "material-ui/FlatButton";
import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import {
  red50,
  red100,
  red200,
  red300,
  red400,
  red500,
  red600,
  red700,
  red800,
  red900
} from "material-ui/styles/colors";

const colors = [
  red50,
  red100,
  red200,
  red300,
  red400,
  red500,
  red600,
  red700,
  red800,
  red900
];

const App = props => {
  const infoStyle = {
    visibility: props.value > 0 ? "visible" : "hidden",
    color: colors[props.value - 1]
  };
  return (
    <Card>
      <CardTitle title="Simple click counter" subtitle="Click - or + button" />
      <CardText>
        <p style={infoStyle}>Du hast schon {props.value} mal geklick</p>
      </CardText>
      <CardActions>
        <FlatButton onClick={props.onDecrement} label="-" />
        <FlatButton primary onClick={props.onIncrement} label="+" />
      </CardActions>
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
