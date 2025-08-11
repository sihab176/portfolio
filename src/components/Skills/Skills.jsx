// import React from "react";

// const Skills = () => {
//     const  skillCategories = [
//     { name: "React", level: 95, icon: <FaReact color="#61DAFB" />, color: "blue" },
//     { name: "TypeScript", level: 90, icon: <SiTypescript color="#3178C6" />, color: "blue" },
//     { name: "Next.js", level: 88, icon: <SiNextdotjs color="#000000" />, color: "gray" },
//     { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss color="#06B6D4" />, color: "cyan" },
//     { name: "Vue.js", level: 85, icon: <FaVuejs color="#42b883" />, color: "green" },
//         { name: "Node.js", level: 90, icon: <FaNodeJs color="#68A063" />, color: "green" },
//     { name: "Python", level: 85, icon: <FaPython color="#3776AB" />, color: "yellow" },
//     { name: "PostgreSQL", level: 88, icon: <SiPostgresql color="#336791" />, color: "blue" },
//     { name: "MongoDB", level: 82, icon: <SiMongodb color="#4DB33D" />, color: "green" },
//     { name: "Express.js", level: 87, icon: <SiExpress color="#000000" />, color: "gray" },
//      { name: "Git", level: 93, icon: <FaGitAlt color="#F05032" />, color: "orange" },
//     { name: "Docker", level: 80, icon: <SiDocker color="#2496ED" />, color: "blue" },
//     { name: "AWS", level: 78, icon: <FaAws color="#FF9900" />, color: "orange" },
//     { name: "Figma", level: 85, icon: <SiFigma color="#F24E1E" />, color: "purple" },
//     { name: "VS Code", level: 95, icon: <SiVisualstudiocode color="#007ACC" />, color: "blue" },
//   ]
//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="text-center space-y-4 mb-16">
//           <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
//             Skills & Technologies
//           </p>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//             What I Work With
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             A comprehensive overview of the technologies and tools I use to
//             bring ideas to life
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//          {
//             skillCategories.map(skill) =>
//                 <div
//             // key={data}
//             className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
//             // style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-lg `}
//                 >
//                   <i className={`text-lg`}></i>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900">jjd</h3>
//                   <p className="text-sm text-gray-600">94% Proficiency</p>
//                 </div>
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//               <div
//                 className={`h-2 rounded-full bg-gradient-to-r  bg-red-600  transition-all duration-1000 ease-out`}
//                 style={{ width: `${99}%` }}
//               ></div>
//             </div>
//           </div>

//          }
//         </div>

//         {/* Certifications */}
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaPython,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFirebaseFill } from "react-icons/ri";
const Skills = () => {
  const skillCategories = [
    {
      name: "React",
      level: 95,
      icon: <FaReact color="#61DAFB" />,
      color: "bg-blue-600",
    },
    {
      name: "Javascript",
      level: 95,
      icon: <IoLogoJavascript color="#ffb703" />,
      color: "bg-yellow-400",
    },

    {
      name: "Next.js",
      level: 84,
      icon: <SiNextdotjs color="#000000" />,
      color: "bg-gray-500",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: <SiTailwindcss color="#06B6D4" />,
      color: "bg-cyan-600",
    },

    {
      name: "Node.js",
      level: 90,
      icon: <FaNodeJs color="#68A063" />,
      color: "bg-green-600",
    },

    {
      name: "MongoDB",
      level: 82,
      icon: <SiMongodb color="#4DB33D" />,
      color: "bg-green-500",
    },
    {
      name: "Express.js",
      level: 87,
      icon: <SiExpress color="#000000" />,
      color: "bg-gray-600",
    },
    {
      name: "Html",
      level: 93,
      icon: <FaHtml5 color="#F05032" />,
      color: "bg-orange-600",
    },

    {
      name: "Figma",
      level: 85,
      icon: <RiFirebaseFill color="#ffb703" />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
            Skills & Technologies
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What I Work With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to
            bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg text-3xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-600">
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${skill?.color}  transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
