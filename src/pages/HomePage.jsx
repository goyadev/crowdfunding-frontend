import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import { Head } from "../components/Head";
import { Hero } from "../components/Hero";

function HomePage() {
  return (
    <div id="project-list">
      <Head />
      <Hero />
      {allProjects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}
export default HomePage;
