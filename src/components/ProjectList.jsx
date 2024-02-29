// @ts-nocheck
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectList(props) {
  const { projectData } = props;
  const projectLink = `project/${projectData.id}`;

  return (
    <div className="project-list">
      <Link to={`/project/${projectData.id}`}>
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}
export default ProjectList;
