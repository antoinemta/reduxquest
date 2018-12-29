import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  light: state
});

const mapDispatchToProps = dispatch => ({
  add1: () => dispatch({ type: "ADD1" }),
  add10: () => dispatch({ type: "ADD10" }),
  reset: () => dispatch({ type: "RESET" }),
  remove1: () => dispatch({ type: "REMOVE1" }),
  remove10: () => dispatch({ type: "REMOVE10" })
});

const CounterComponent = ({ light, add1, add10, reset, remove1, remove10 }) => (
  <div>
    <p>{light}</p>
    <button onClick={add1}>add +1</button>
    <button onClick={add10}>add +10</button>
    <button onClick={reset}>reset</button>
    <button onClick={remove1}>add -1</button>
    <button onClick={remove10}>add -10</button>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
