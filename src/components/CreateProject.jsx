// import the CSS file and imports
import { useState } from "react";
import postProject from "../api/post-project";
import { useNavigate } from "react-router-dom";

// Things needed in form: "title": "Project three", "description", "goal","image":
export function CreateProjectForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [isOpen, setOpen] = useState(true);
  const [currentTime, setTime] = useState("");
  // the last thing you were doing was trying to get a timestamp to send to the backend @4pm Tues 27 Feb

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log("Title test");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("Description test");
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
    console.log("Goal test");
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
    console.log("Image test");
  };

  const handleIsOpen = (event) => {
    setOpen(event.target.value);
    console.log("Is open/closed for pledges test");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createUser API function with the user data
      await postProject(title, description, goal, image, isOpen);

      // Optionally, you can navigate to another page after successful user creation
      navigate("/success");
    } catch (error) {
      console.error("Error posting project:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  // The form

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter a description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          id="goal"
          placeholder="Enter a goal"
          value={goal}
          onChange={handleGoalChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          placeholder="Enter Image URL"
          value={image}
          onChange={handleImageChange}
        />
      </div>
      <p>Open for pledges:</p>
      <div>
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
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
}
