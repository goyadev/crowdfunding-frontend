import { useState, useEffect } from "react";
import getProjects from "../api/get-projects";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Here we use the useState hook to create a state variable called projects and a function to update it called setProjects. We initialize the state variable with an empty array.

  // We also create a state variable called isLoading and error to keep track of the loading state and any errors that might occur.

  // We use the useEffect hook to fetch the projects from the API and update the state variables accordingly.
  // This useEffect will only run once, when the component this hook is used in is mounted

  useEffect(() => {
    getProjects()
      .then((projects) => {
        setProjects(projects);
        setIsLoading(false);
      })

      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { projects, isLoading, error };
}
