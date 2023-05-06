import React from "react";
import { AppDispatch } from "stores/store";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { decrement, getMax, increment, setMaxToZero } from "./counterSlice";

function Counter() {
  const dispatch: AppDispatch = useAppDispatch();
  const { value, max, loading } = useAppSelector((state) => state.counter);
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => dispatch(decrement());
  const getMaxCount = () => {
    dispatch(getMax())
      .then(() => {
        //do something
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.tsx:17 ~ dispatch ~ err:", err);
      });
  };
  const refreshMax = () => {
    dispatch(setMaxToZero());
  };
  return (
    <div style={{ height: "300px", fontSize: 20 }}>
      <button onClick={() => onIncrement()}>+</button>
      Counter : {value}
      <button onClick={() => onDecrement()}>-</button>
      <div>
        <button onClick={() => getMaxCount()}>getMax</button>
        {!loading && max}
        {loading && "Loading"}
        <button onClick={() => refreshMax()}>refreshMax</button>
      </div>
    </div>
  );
}

export default Counter;
