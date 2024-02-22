async function createUser(username, password) {
  const url = `${import.meta.env.VITE_API_URL}/create-users/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      const fallbackError = `Error creating user`;
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    // Handle fetch or other errors
    console.error("Error creating user:", error);
    throw new Error("Error creating user. Please try again later.");
  }
}

export default createUser;
