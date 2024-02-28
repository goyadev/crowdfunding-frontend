import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge";

export function CreatePledgeForm() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [anonymous, setAnon] = useState(false);
  const [project, setProject] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    console.log("Amount test");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    console.log("Comment test");
  };

  const handleAnonChange = (event) => {
    setAnon(event.target.value);
    console.log("Anon test");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createUser API function with the user data
      await postPledge(amount, comment, anonymous, project);

      // Optionally, you can navigate to another page after successful pledge
      navigate("/success");
    } catch (error) {
      navigate("/404");
      console.error("Error posting pledge:", error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  // The form

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter an amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter a comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <p>Is this pledge anonymous:</p>
      <div>
        <label htmlFor="isOpen">Yes:</label>
        <input
          type="radio"
          name="is_anon"
          id="isAnon"
          value="true" // Value for "Yes" option
          onChange={handleAnonChange}
        />

        <label htmlFor="isClosed">No:</label>
        <input
          type="radio"
          name="is_anon"
          id="isNamed"
          value="false" // Value for "No" option
          checked={true}
          onChange={handleAnonChange}
        />
      </div>
      <button type="submit">Pledge</button>
    </form>
  );
}
export default CreatePledgeForm;
