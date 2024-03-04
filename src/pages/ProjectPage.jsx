import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledgeForm from "../components/CreatePledge";
import "./ProjectPage.css";

function ProjectPage() {
  const { id } = useParams();
  const { project, isLoading, error } = useProject(id);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;

  var date = new Date(project.date_created);
  var formattedDate = date.toLocaleDateString();

  const isOpenStatus = project.is_open;

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <img src={project.image} className="project-image" />
      <h2>Created: {formattedDate}</h2>
      <h3>{isOpenStatus ? "Project Open" : "Project Closed"}</h3>
      <p className="project-p">{project.description}</p>
      <br />
      <br />
      <CreatePledgeForm projectId={id} />
      <br />
      <br />
      <h3>Pledges:</h3>
      <ul>
        {project.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              ${pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectPage;
