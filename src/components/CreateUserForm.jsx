import { useState } from "react";
import createUser from "../api/post-create-user";
import { useNavigate } from "react-router-dom";

export function CreateUserForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log("Username test");
  };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   console.log("Email test");
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("Password test");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createUser API function with the user data
      await createUser(username, password);

      navigate("/success");
      // Optionally, you can navigate to another page after successful user creation
      // navigate("/success");
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  return (
    <form className="form">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      {/* <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </div> */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
