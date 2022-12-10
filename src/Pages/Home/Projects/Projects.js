import React from "react";
import img1 from "../../../images/guitershop.png";
import img2 from "../../../images/zahidography.png";
import img3 from "../../../images/techeagle.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "GuiterShop",
      img: img1,
      liveLink: "https://guitarshop-554a5.web.app/",
    },
    {
      _id: 2,
      name: "ZahidographY",
      img: img2,
      liveLink: "https://assignment-11-f933c.web.app/",
    },
    {
      _id: 3,
      name: "TechEagle",
      img: img3,
      liveLink: "https://tech-eagle-ass10.web.app/",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-semibold my-12 text-center border-b-4 border-white pb-3 w-72 mx-auto">
        Latest Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
