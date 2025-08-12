import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: "Virtual Bookshelf",
      category: "web",
      description:
        "Virtual Bookshelf is a modern web application for book lovers to organize, track, and enjoy their reading journey. Built with React, Vite, and Tailwind CSS, it offers a clean, user-friendly interface to manage your books, reviews, and reading status. ",
      image: "https://i.ibb.co.com/pBp5D2DX/project-Img-1.jpg",
      technologies: ["React", "Node.js", "Mongodb", "HookFrom"],
      liveUrl: "https://assignment-11-bookself.web.app/",
      githubUrl:
        "https://github.com/sihab176/BookBridge-client?tab=readme-ov-file",
    },

    {
      id: 2,
      title: "Daily Price Tracker",
      category: "web",
      description:
        "Daily Price Tracker is a modern web application that empowers users to monitor, compare, and analyze product prices across local markets. With robust authentication, role-based dashboards, and real-time price tracking, it’s the ultimate tool for smart shopping and efficient market management.",
      image: "https://i.ibb.co.com/TxvwFwdy/website-2.jpg",
      technologies: [
        "React",
        "Node.js",
        "Mongodb",
        "Stripe",
        "HookFrom",
        "Firebase",
      ],
      liveUrl: "https://assignment12-local-market.netlify.app/",
      githubUrl: "",
    },
    {
      id: 3,
      title: "GreenWhisper Plant Care",
      category: "web",
      description:
        "A full-stack React application for managing and tracking your plant collection. Users can add, edit, view, and delete plants, as well as see plant details and care instructions. The app supports authentication, dark/light mode, and responsive design.",
      image: "https://i.ibb.co.com/VpNV6PNv/project-img-3.jpg",
      technologies: ["React", "Node.js", "Mongodb"],
      liveUrl: "https://assignment-plant-care.web.app/",
      githubUrl: "",
    },
  ];
  const { id } = useParams();
  console.log(id);
  const singleProject = projects.find((data) => data.id == id);
  console.log(singleProject);

  return (
    <div className="  max-w-7xl mx-auto lora-font ">
      <Navbar />

      <section>
        <div className="flex justify-between flex-col md:flex-row items-center py-20 px-10 bg-[#0b2545] mt-8">
          <div className="flex-1 space-y-5">
            <h3 className="text-4xl font-bold">{singleProject.title}</h3>
            <p>{singleProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {singleProject?.technologies?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#5fa8d3] text-blue-700 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-8">
              <a target="_blank" href={singleProject.liveUrl}  className="btn">
                live Demo
              </a>
              <a target="_blank" href={singleProject.githubUrl} className="btn">
                Github
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img className="" src={singleProject?.image} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
