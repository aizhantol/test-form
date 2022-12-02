import React from "react";

export const Second = ({ form, setForm, onClick }) => {
  return (
    <div>
      <p className='stepName'>Step 2/3</p>
      <h2>Message</h2>
      <form onsubmit='return false'>
        <div className='fdc'>
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className='radios'>
          <input
            type='radio'
            id='contactChoice1'
            checked={form.radio1 === "email" ? true : false}
            onChange={(e) => setForm({ ...form, radio1: e.target.value })}
            name='contact'
            value='email'
          />
          <label htmlFor='contactChoice1' className='mr20'>
            Email
          </label>

          <input
            type='radio'
            checked={form.radio1 === "phone" ? true : false}
            id='contactChoice2'
            onChange={(e) => setForm({ ...form, radio1: e.target.value })}
            name='contact'
            value='phone'
          />
          <label htmlFor='contactChoice2'>Phone</label>
        </div>
        <div className='bottom'>
          <button
            className='textBtn'
            type='submit'
            onClick={(e) => onClick(1, e)}>
            Back
          </button>

          <button
            className='blueBtn '
            type='submit'
            onClick={(e) => onClick(3, e)}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};
