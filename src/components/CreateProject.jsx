// import the CSS file and imports
import { useState } from "react";
import postProject from "../api/post-project";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";

export function CreateProjectForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [isOpen, setOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const { auth, setAuth } = useAuth();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log("title set");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("description set");
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
    console.log("goal set");
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
    console.log("image set");
  };

  const handleIsOpen = (event) => {
    setOpen(event.target.id === "isOpen");
    console.log("is open or not set");
  };

  const getTimeAndSendToBackend = () => {
    const now = new Date();
    const isoString = now.toISOString();
    setCurrentTime(isoString); // Set current time here
    console.log("time set");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the postProject API function with the project data
      await postProject(title, description, goal, image, isOpen, currentTime);

      // Optionally, you can navigate to another page after successful project creation
      navigate("/success");
    } catch (error) {
      console.error("Error posting project:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  if (auth.token === null)
    return (
      <section>
        <h3>{"you're not logged in"}</h3>
        <h3>ヽ(°〇°)ﾉ</h3>
      </section>
    );

  // The form

  return (
    <form className="form" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a title"
          value={title}
          onChange={handleTitleChange}
        />
      </section>
      <section>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter a description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </section>
      <section>
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          id="goal"
          placeholder="Enter a goal"
          value={goal}
          onChange={handleGoalChange}
        />
      </section>
      <section>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          placeholder="Enter Image URL"
          value={image}
          onChange={handleImageChange}
        />
      </section>
      <p>Open for pledges:</p>
      <section className="radio-select">
        <label htmlFor="isOpen">Yes:</label>
        <input
          type="radio"
          name="is_open"
          id="isOpen"
          value="true" // Value for "Yes" option
          checked={true}
          onChange={handleIsOpen}
        />

        <label htmlFor="isClosed">No:</label>
        <input
          type="radio"
          name="is_open"
          id="isClosed"
          value="false" // Value for "No" option
          onChange={handleIsOpen}
        />
      </section>
      <button type="submit" onClick={getTimeAndSendToBackend}>
        Create Project
      </button>
    </form>
  );
}
