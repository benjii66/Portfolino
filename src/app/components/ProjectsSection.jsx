"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


//ici tu dois t'occuper des projets que tu as en place

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    alt: "Project 1",
    tag: ["All", "OpenClassrooms", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "OpenClassrooms", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "OpenClassrooms", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Personnel", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "OpenClassrooms", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Personnel", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [subTag, setSubTag] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    if(newTag === "All") setSubTag(null);
    if(newTag === "OpenClassrooms") setSubTag(null);
    if(newTag === "Personnel") setSubTag(null);

  };

  const handleSubTagChange = (newSubTag) => {
    setSubTag(newSubTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag) && (subTag ? project.tag.includes(subTag) : true)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="OpenClassrooms"
          isSelected={tag === "OpenClassrooms"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personnel"
          isSelected={tag === "Personnel"}
        />
        
      </div>
      <div className="flex flex-row justify-center items-center gap-2 py-2">
      <button
        className={`tag-btn ${subTag === "Frontend" ? "selected" : ""}`}
        onClick={() => handleSubTagChange(subTag !== "Frontend" ? "Frontend" : null)}
      >
        Frontend
      </button>
      <button
        className={`tag-btn ${subTag === "Backend" ? "selected" : ""}`}
        onClick={() => handleSubTagChange(subTag !== "Backend" ? "Backend" : null)}
      >
        Backend
      </button>
    </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
