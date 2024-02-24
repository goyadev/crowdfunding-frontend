export function CreatePledgeForm() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    console.log("Amount test");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    console.log("Comment test");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the createUser API function with the user data
      await postPledge(amount, comment);

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
      <button type="submit">Pledge</button>
    </form>
  );
}
