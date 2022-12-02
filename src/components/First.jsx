import React, { useState } from "react";

export const First = ({ form, setForm, onClick }) => {
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setForm({ ...form, email: event.target.value });
  };

  return (
    <div>
      <p className='stepName'>Step 1/3</p>
      <h2>Sign UP</h2>
      <form onSubmit={(e) => onClick(2, e)}>
        <div className='form1'>
          <div className='fdc'>
            <label htmlFor='name'>First Name</label>
            <input
              required
              type='text'
              name='name'
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className='fdc'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              required
              type='text'
              name='lastname'
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <div className='fdc'>
            <label htmlFor='date'>Date of Birth</label>
            <input
              max='2022-01-01'
              required
              type='date'
              name='date'
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className='fdc'>
            <label htmlFor='email' className={error ? "errorLbl " : ""}>
              Email Address
            </label>
            <input
              required
              type='email'
              className={error ? "error " : ""}
              name='email'
              value={form.email}
              onChange={(e) => handleEmail(e)}
            />
            <p className='errorMes'> {error}</p>
          </div>
        </div>
        <div className='fdc address'>
          <label htmlFor='address'>Address</label>
          <input
            required
            type='text'
            name='address'
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>
        <button
          className='blueBtn rightAlign'
          type='submit'
          disabled={error ? true : false}>
          Next Step
        </button>
      </form>
    </div>
  );
};
