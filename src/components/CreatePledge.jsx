import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge";

export function CreatePledgeForm(props) {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [anonymous, setAnon] = useState("false");

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
      await postPledge(amount, comment, anonymous, props.projectId);

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
    <form className="form" id="pledge-form" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter an amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </section>
      <section>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter a comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </section>
      <p>Is this pledge anonymous:</p>
      <section className="radio-select">
        <label htmlFor="isOpen">Yes:</label>
        <input
          type="radio"
          name="is_anon"
          id="inAnon"
          checked={anonymous === "true"}
          value="true" // Value for "Yes" option
          onChange={handleAnonChange}
        />

        <label htmlFor="isClosed">No:</label>
        <input
          type="radio"
          name="is_anon"
          id="isNamed"
          value="false" // Value for "No" option
          checked={anonymous === "false"}
          onChange={handleAnonChange}
        />
      </section>
      <button type="submit">Pledge</button>
    </form>
  );
}
export default CreatePledgeForm;
