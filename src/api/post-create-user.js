// create async function createUser
async function createUser(username, password) {
  // will need the env. URL

  const url = `${import.meta.env.VITE_API_URL}/create-users/`;
  // likely need response = await fetch again like postLogin

  // METHOD: POST
  const response = await fetch(url, {
    method: "POST",

    // headers needed?
    headers: {
      "Content-Type": "application/json",
    },
    // body to stringify: username, password, email
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  // if response is not ok, then error
  if (!response.ok) {
    const fallbackError = `Error trying to login`;
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  // fallback error 'Error creating user'

  // create catch error with fallback error

  // return await reponse.json();
  return await response.json();
}
export default createUser;
