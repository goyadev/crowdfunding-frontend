/* eslint-disable react/prop-types */
// @ts-nocheck
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import CreatePledgeForm from "./CreatePledge";

function ProjectCard(props) {
  const { projectData } = props;
  // const projectLink = `project/${projectData.id}`;
  var date = new Date(projectData.date_created);
  var formattedDate = date.toLocaleDateString();

  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} className="project-image" />
        <h3>{projectData.title}</h3>
        <h4>Started: {formattedDate}</h4>
        <h4>Created by: {projectData.owner}</h4>
        <h4>
          About the project: <br />
        </h4>
        <p>{projectData.description}</p>

        <h4>Project Goal: {projectData.goal}</h4>
      </Link>
      <CreatePledgeForm projectId={projectData.id} />
    </div>
  );
}
export default ProjectCard;
