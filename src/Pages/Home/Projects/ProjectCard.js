import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, img, liveLink } = project;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 ">
        <img src={img} alt="project" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions">
          <button className="btn btn-primary">
            <a href={liveLink}>Open</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
