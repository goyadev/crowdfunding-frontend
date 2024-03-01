// @ts-nocheck
// import { useState } from "react";
import "./ContactForm.css";

export function ContactForm() {
  return (
    <div className="contact-container">
      <div className="left-col">
        <video src=".//public/contactVid.mp4" autoPlay loop muted></video>
        {/* Video by Leeloo The First: https://www.pexels.com/video/a-person-touches-a-flower-in-a-glass-6945214/*/}
      </div>
      <div className="right-col">
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
          <div className="description">Dark Mode</div>
        </div>

        <h1>Contact us</h1>
        <p>Text about Artstarter contact</p>

        <form id="contact-form" method="post">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Your Message"
            id="message"
            name="message"
            required
          ></textarea>
          <button type="submit" id="submit" name="submit">
            Send
          </button>
        </form>
        <div id="error"></div>
        <div id="success-msg"></div>
      </div>
    </div>
    /* contact form based off of Diana L https://codepen.io/dianalisova/pen/eYJGgKq */
  );
}
