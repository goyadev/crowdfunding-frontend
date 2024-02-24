async function postPledge(amount, comment){
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;

    const response = await fetch(url, {
        method: "POST",
    
        // Tell server we are sending JSON data
        headers: {
          "Content-Type": "application/json",
        };
        body: JSON.stringify({
            amount: amount,
            comment: comment,
            // id: someWayToFeedinProjectID,
          }),
        });
// error handling
if (!response.ok) {
    const fallbackError = `Error trying to create project`;
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}
export default postPledge;
