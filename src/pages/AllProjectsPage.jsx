// @ts-nocheck
import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";
import "./AllProjectsPage.css";

export function AllProjectsPage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      <h1>PROJECTS</h1>
      <div id="project-list">
        {projects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </>
  );
}

export default AllProjectsPage;
