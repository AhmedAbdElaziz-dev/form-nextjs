import { useRef, useState } from "react";
const Form = () => {
  const [form, setForm] = useState({
    FirstName: { id: "firstName", placeholder: "FirstName", ref: useRef() },
    LastName: { id: "lastName", placeholder: "LastName", ref: useRef() },
    Email: { id: "email", placeholder: "Email", ref: useRef() },
    PhoneNo: {
      id: "phoneNumber",
      value: "",
      placeholder: "PhoneNumber",
      ref: useRef(),
    },
    Position: { id: "company", placeholder: "Company", ref: useRef() },
    Company: { id: "position", placeholder: "Position", ref: useRef() },
    UserName: { id: "userName", placeholder: "UserName", ref: useRef() },
  });
  const buttonHandler = (e) => {
    e.preventDefault()
    console.log(form.FirstName.ref.current.value);
  };
  return (
    <form className="form" id="form">
      {Object.keys(form).map((input,index) => (
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
