// @ts-nocheck
import { useState } from "react";
import "./App.css";
import "./ContactForm.css";

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
    <>
      <h1 className="page-heading">Contact us</h1>
      <section className="contact-container">
        <article className="left-col">
          <video
            src="/contactVid.mp4"
            autoPlay
            loop
            muted
            className="video"
            aria-label="video of person reaching out to touch flower in a class"
            onError="/vid-fallback-img.png"
          ></video>
          {/* Video by Leeloo The First: https://www.pexels.com/video/a-person-touches-a-flower-in-a-glass-6945214/*/}
        </article>
        <section className="right-col">
          <p className="contact-p">
            Contact us for inquiries, support, and feedback. We're here to help
          </p>

          <form className="form" id="contact-form" onSubmit={validate}>
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
          <article id="error">{error}</article>
          <article id="success-msg">{successMsg}</article>
        </section>
      </section>
    </>
    /* contact form based off of Diana L https://codepen.io/dianalisova/pen/eYJGgKq */
  );
}
