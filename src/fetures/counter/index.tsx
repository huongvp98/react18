import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  console.log(counter);
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => dispatch(decrement());
  return (
    <div>
      Counter : {counter} <button onClick={() => onIncrement()}>+</button>
      <button onClick={() => onDecrement()}>-</button>
    </div>
  );
}

export default Counter;
