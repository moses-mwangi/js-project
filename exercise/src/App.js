// install @emailjs/browser
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_qmydrmg",
        "template_hkpilep",
        form.current,
        "suhRsKkVRqi3HrOOA"
      )
      .then(
        (result) => {
          console.log(result.text, result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default App;
