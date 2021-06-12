import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    firstName: { id: "firstName", placeholder: "firstName", ref: useRef() },
    lastName: { id: "lastName", placeholder: "lastName", ref: useRef() },
    email: { id: "email", placeholder: "email", ref: useRef() },
    phoneNo: {
      id: "phoneNo",
      value: "",
      placeholder: "phoneNo",
      ref: useRef(),
    },
    company: { id: "company", placeholder: "company", ref: useRef() },
    position: { id: "position", placeholder: "position", ref: useRef() },
    userName: { id: "userName", placeholder: "userName", ref: useRef() },
  });
  
  useEffect(() => {
    axios.get("http://localhost:3001/get").then((res) => {
      console.log("res", res);
      const {
        firstName,
        lastName,
        email,
        phoneNo,
        company,
        position,
        userName,
      } = res.data;
      form.firstName.ref.current.value = firstName;
      form.lastName.ref.current.value = lastName;
      form.email.ref.current.value = email;
      form.phoneNo.ref.current.value = phoneNo;
      form.company.ref.current.value = company;
      form.position.ref.current.value = position;
      form.userName.ref.current.value = userName;
    });
  }, []);

  const buttonHandler = (e) => {
    e.preventDefault();
    console.log(form);
    const row = JSON.stringify({
      FirstName: form.firstName.ref.current.value,
      LastName: form.lastName.ref.current.value,
      Email: form.email.ref.current.value,
      PhoneNo: form.phoneNo.ref.current.value,
      Position: form.position.ref.current.value,
      Company: form.company.ref.current.value,
      UserName: form.userName.ref.current.value,
    });
    fetch(
      "https://sheet.best/api/sheets/faa604bd-a8ba-45d9-8227-6257663d9b1a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: row,
      }
    )
      .then((response) => {
        console.log("res", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <form className="form" id="form">
      {Object.keys(form).map((input, index) => (
        <input
          key={index}
          type="text"
          id={form[input].id}
          placeholder={form[input].placeholder}
          ref={form[input].ref}
        />
      ))}
      <button onClick={buttonHandler}>submit</button>
    </form>
  );
};
export default Form;
