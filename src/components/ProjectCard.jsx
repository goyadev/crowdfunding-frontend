// @ts-nocheck
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import CreatePledgeForm from "./CreatePledge";

function ProjectCard(props) {
  const { projectData } = props;
  const projectLink = `project/${projectData.id}`;

  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        {/* <img src={projectData.image} /> */}
        <h3>{projectData.title}</h3>
      </Link>
      <CreatePledgeForm />
    </div>
  );
}
export default ProjectCard;
