// @ts-nocheck
import { useState } from "react";
import "./App.css";
import "./ContactForm.css";
import contactVid from "/contactVid.mp4";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      return;
    }

    if (!(email.includes(".") && email.includes("@"))) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 15) {
      setError("Please write a longer message.");
      return;
    }

    setError("");
    setSuccessMsg("Thank you! We will get back to you as soon as possible.");

    setTimeout(function () {
      setSuccessMsg("");
      document.getElementById("contact-form").reset();
    }, 6000);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact-container">
      <div className="left-col">
        <contactVid />
        {/* <video src=".//public/contactVid.mp4" autoPlay loop muted></video> */}
        {/* Video by Leeloo The First: https://www.pexels.com/video/a-person-touches-a-flower-in-a-glass-6945214/*/}
      </div>
      <div className="right-col">
        <h1>Contact us</h1>
        <p>Text about Artstarter contact</p>

        <form id="contact-form" onSubmit={validate}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your Message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" name="submit">
            Send
          </button>
        </form>
        <div id="error">{error}</div>
        <div id="success-msg">{successMsg}</div>
      </div>
    </div>
    /* contact form based off of Diana L https://codepen.io/dianalisova/pen/eYJGgKq */
  );
}
