import { useState } from "react";
import createUser from "../api/post-create-user";
import { useNavigate } from "react-router-dom";

export function CreateUserForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  // future, would be good to investigate username validation eg. this username is taken
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log("Username test");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("Email test");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("Password test");
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    console.log("First name test");
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    console.log("Last name test");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createUser API function with the user data
      await createUser(username, password, email, first, last);

      navigate("/success");
      // Optionally, you can navigate to another page after successful user creation
      // navigate("/success");
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  return (
    <form className="misc-form">
      <section>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </section>
      <section>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter your first name"
          value={first}
          onChange={handleFirstName}
        />
      </section>
      <section>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          placeholder="Enter last name"
          value={last}
          onChange={handleLastName}
        />
      </section>
      <section>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </section>
      <section>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </section>
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
