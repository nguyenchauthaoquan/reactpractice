import '../styles/css/App.css';
import {connect} from "react-redux";
import {CALCULATE, GET_EXPRESSION} from "../constants";

function App(props) {

  return (
      <div className={"calculator-body"}>
        <div className="expression-screen">
          {props.calculator.expression}
        </div>
        <div className="result-screen">
          {props.calculator.result}
        </div>
        <div className="key-container">
          <div className="row-key">
            <button value={"("} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>(</button>
            <button value={")"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>)</button>
          </div>
          <div className="row-key">
            <button value={"7"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>7</button>
            <button value={"8"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>8</button>
            <button value={"9"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>9</button>
            <button value={"*"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>*</button>
          </div>
          <div className="row-key">
            <button value={"4"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>4</button>
            <button value={"5"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>5</button>
            <button value={"6"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>6</button>
            <button value={"-"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>-</button>
          </div>
          <div className="row-key">
            <button value={"1"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>1</button>
            <button value={"2"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>2</button>
            <button value={"3"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>3</button>
            <button value={"+"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>+</button>
          </div>
          <div className="row-key">
            <button value={"0"} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>0</button>
            <button value={"."} onClick={event => props.getExpression(GET_EXPRESSION, event.target.value)}>.</button>
            <button onClick={() => props.getCalculatedResult(CALCULATE)}>=</button>
          </div>
        </div>
      </div>
  );
}

let mapStateToProps = (state, props) => {
  return {
    calculator: state.calculator
  }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
    getExpression: (type, payload) => {
      dispatch({type: type, payload: payload})
    },

    getCalculatedResult: (type, payload) => {
      dispatch({type: type, payload: payload});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
