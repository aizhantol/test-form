import "./App.css";
import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { ProgressBar } from "./components/ProgressBar";
import React, { useState } from "react";
import img from "./assets/main.png";
import db from "./fb";
import {
  collection,
  addDoc,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";

function App() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState();
  const [active, setActive] = useState([false, false]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    address: "",
    message: "",
    radio1: "phone",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  let comp;

  const stepFunc = (val) => {
    if (val - 1 && !active[val - 2]) {
      active[val - 2] = true;
    }
    setStep(val);
  };
  const next = (val, e) => {
    e.preventDefault();
    // getting users and check email
    if (step === 1) {
      const q = query(
        collection(db, "users"),
        where("email", "==", form.email)
      );
      const unsub = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.docs.length) {
          setError("");
          stepFunc(val);
          unsub();
        } else {
          setError("Email already exists");
        }
      });
    } else {
      stepFunc(val);
    }
  };
  const onSubmit = async () => {
    try {
      await addDoc(collection(db, "/users"), form);
    } catch (err) {
      alert(err);
    }
  };
  if (step === 1) {
    comp = <First onClick={next} form={form} setForm={setForm} />;
  } else if (step === 2) {
    comp = <Second onClick={next} form={form} setForm={setForm} />;
  } else {
    comp = (
      <Third form={form} setForm={setForm} onSubmit={onSubmit} onClick={next} />
    );
  }

  const setBar = (val) => {
    if (step > val) {
      setStep(val);
    }
  };
  return (
    <div className='App'>
      <img src={img} alt='img' className='main' />
      <div className='right'>
        <ProgressBar onClick={setBar} step={step} active={active} />
        {comp}
        <p className='errorMes bottom'> {error}</p>
      </div>
    </div>
  );
}

export default App;
