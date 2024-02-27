// @ts-nocheck
// create asyn function for postProject
async function postProject(
  title,
  description,
  goal,
  image,
  isOpen,
  currentTime
) {
  // const URL from .env
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  // const reponse for URL with fetch, method is POST
  const response = await fetch(url, {
    method: "POST",

    // Tell server we are sending JSON data
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${window.localStorage.getItem("token")}`,
    },
    // what is the data we're sending
    body: JSON.stringify({
      title: title,
      description: description,
      goal: goal,
      image: image,
      is_open: isOpen,
      date_created: currentTime,
    }),
  });
  // what errors should we use
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
export default postProject;
