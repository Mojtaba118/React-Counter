import React, { Component } from "react";

class Counter extends Component {
  showCounterValue = data => {
    let classes = "mr-3 badge badge-";
    return data.value === 0 ? (
      <span className={`${classes}warning`}>Zero</span>
    ) : (
      <span className={`${classes}secondary`}>{data.value}</span>
    );
  };
  render() {
    const { data, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row m-3">
        <div className="col-6">
          <button
            className="btn btn-danger mr-3"
            onClick={() => onDelete(data)}
          >
            x
          </button>
          <span className="mr-5">{`Counter ${data.id}`}</span>
          <button
            className="btn btn-primary mr-3"
            onClick={() => onDecrement(data)}
            disabled={data.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          {this.showCounterValue(data)}
          <button className="btn btn-success" onClick={() => onIncrement(data)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
