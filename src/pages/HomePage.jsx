// @ts-nocheck
import useProjects from "../hooks/use-projects";
import "./HomePage.css";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";

function HomePage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      <Hero />
      <div id="project-list">
        {projects.map((projectData, key) => {
          return <ProjectList key={key} projectData={projectData} />;
        })}
      </div>
    </>
  );
}
export default HomePage;
