import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Virtual Bookshelf",
      category: "web",
      description:
        "Virtual Bookshelf is a modern web application for book lovers to organize, track, and enjoy their reading journey. ",
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
        "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
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
        "A full-stack React application for managing and tracking your plant collection. Users can add, edit, view, and delete plants,",
      image: "https://i.ibb.co.com/VpNV6PNv/project-img-3.jpg",
      technologies: ["React", "Node.js", "Mongodb"],
      liveUrl: "https://assignment-plant-care.web.app/",
      githubUrl: "",
    },
  ];

  return (
    <div>
      <section id="portfolio" className="py-20 ">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold ">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing different skills and
              technologies
            </p>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-[#0b2545] rounded-xl overflow-hidden shadow-lg  hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full text-gray-900 hover:bg-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-external-link-fill text-lg">
                        <FaExternalLinkAlt />
                      </i>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full text-gray-900 hover:bg-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-github-fill text-lg">
                        <FaGithub />
                      </i>
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold  mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* live url */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                    >
                      <span>View Live</span>
                    </a>
                    {/* details */}
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
                    >
                      {" "}
                      <span>Details</span>
                      {/* <div className="w-4 h-4 flex items-center justify-center">
                        
                      </div> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
