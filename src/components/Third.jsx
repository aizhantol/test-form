import React from "react";
import adv2 from "../assets/adv2.svg";
import adv1 from "../assets/adv1.svg";

export const Third = ({ form, setForm, onClick, onSubmit }) => {
  return (
    <div>
      <p className='stepName'>Step 3/3</p>
      <h2>Checkbox</h2>
      <form onsubmit='return false'>
        <div className='checks'>
          <label
            htmlFor='checkbox1'
            className={`mr20 ${form.checkbox1 ? "checked" : ""}`}>
            <input
              type='checkbox'
              name='checkbox1'
              onChange={() => setForm({ ...form, checkbox1: !form.checkbox1 })}
            />
            <img src={adv1} alt='alt' />
          </label>
          <label
            htmlFor='checkbox2'
            className={form.checkbox2 ? "checked" : ""}>
            <input
              type='checkbox'
              onChange={() => setForm({ ...form, checkbox2: !form.checkbox2 })}
              name='checkbox2'
            />
            <img src={adv2} alt='alt' />
          </label>
        </div>

        <div className='radios'>
          <input
            type='checkbox'
            name='checkbox3'
            onChange={() => setForm({ ...form, checkbox3: !form.checkbox3 })}
          />
          <label htmlFor='contactChoice1' className='mr20'>
            Email
          </label>

          <input
            type='checkbox'
            name='checkbox4'
            onChange={() => setForm({ ...form, checkbox4: !form.checkbox4 })}
          />
          <label htmlFor='checkbox4'>Phone</label>
        </div>
        <div className='bottom'>
          <button className='textBtn' type='button' onClick={(e) => onClick(2, e)}>
            Back
          </button>

          <button className='blueBtn ' type='button' onClick={() => onSubmit()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
