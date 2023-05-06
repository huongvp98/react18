import React from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { decrement, increment } from "./counterSlice";
import { AppDispatch } from "stores/store";

function Counter() {
  const dispatch: AppDispatch = useAppDispatch();
  const counter: number = useAppSelector((state) => state.counter.value);
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => dispatch(decrement());
  return (
    <div style={{ height: "300px", fontSize: 20 }}>
      <button onClick={() => onIncrement()}>+</button>
      Counter : {counter}
      <button onClick={() => onDecrement()}>-</button>
    </div>
  );
}

export default Counter;
