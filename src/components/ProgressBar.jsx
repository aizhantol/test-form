import React from "react";
import tick from "../assets/tick.svg";

export const ProgressBar = (props) => {
  return (
    <div className='bar'>
      <div
        className={`bar_item ${props.step === 1 ? "active" : ""} ${
          props.active[0] ? "full" : ""
        }`}
        onClick={() => props.onClick(1)}>
        <p>
          {props.active[0] && props.step !== 1 ? <img src={tick} alt='d' /> : 1}
        </p>
        Sign Up
      </div>
      <div
        className={`bar_item ${props.step === 2 ? "active" : ""} ${
          props.active[1] ? "full" : ""
        }`}
        onClick={() => props.onClick(2)}>
        <p>
          {props.active[1] && props.step !== 2 ? <img src={tick} alt='d' /> : 2}
        </p>
        Message
      </div>
      <div className={`bar_item ${props.step === 3 ? "active" : ""} `}>
        <p>3</p>
        Checkbox
      </div>
    </div>
  );
};
