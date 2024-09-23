// import React from 'react'
// import Card from './Card';
// import { Code,Link } from './Icons';
// import CardCover from './CardCover';
// import ProjectModal from './ProjectModal';
// const Project = ({ project: { img, demo, code, description, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } }) => {
//     return (
//         <Card style={style} >

//             <div className="group relative rounded-md cursor-pointer">
//                 <img src={img} alt="Projec-Image" width="auto" height="auto" loading='lazy' title="Project" className='rounded-t-md ' />
//                 <CardCover text={description} style={style} />
//             </div>
//             <div className='flex justify-center items-center rounded-b-md'>
//                 <ProjectsLink name="Code" style={"rounded-bl-md " + style.cover} link={code} />
//                 <ProjectsLink name="Demo" style={"rounded-br-md " + style.cover} link={demo} />
//             </div>
//         </Card>
//     )
// }

// export default Project;


// const ProjectsLink = ({ name, link, style }) => {
//     return (
//         <a href={link} target="_blank" rel="noreferrer"
//             className={` w-1/2 py-3 text-center  text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}>
//             {name === "Code" ? <Code /> : <Link />} <span className='pl-2'>{name}</span>
//         </a>
//     )
// }

// import React, { useState } from 'react';
// import Card from './Card';
// import { Code, Link } from './Icons';
// import CardCover from './CardCover';
// import ProjectModal from './ProjectModal'; // Import the modal component

// const Project = ({ project }) => {
//   const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <Card style={project.style}>
//         <div
//           className="group relative rounded-md cursor-pointer"
//           onClick={openModal}  // Open modal when clicking the project card
//         >
//           <img
//             src={project.img}
//             alt="Project Image"
//             width="auto"
//             height="auto"
//             loading="lazy"
//             title="Project"
//             className="rounded-t-md"
//           />
//           <CardCover text={project.description} style={project.style} />
//         </div>
//         <div className='flex justify-center items-center rounded-b-md'>
//           <ProjectsLink name="Code" style={"rounded-bl-md " + project.style.cover} link={project.code} />
//           <ProjectsLink name="Demo" style={"rounded-br-md " + project.style.cover} link={project.demo} />
//         </div>
//       </Card>

//       {/* Include the modal here */}
//       <ProjectModal project={project} isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// export default Project;

// const ProjectsLink = ({ name, link, style }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noreferrer"
//       className={`w-1/2 py-3 text-center text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}
//     >
//       {name === "Code" ? <Code /> : <Link />} <span className="pl-2">{name}</span>
//     </a>
//   );
// };
// import React, { useState } from 'react';
// import Card from './Card';
// import { Code } from './Icons';
// import CardCover from './CardCover';
// import ProjectModal from './ProjectModal'; // Import the modal component

// const Project = ({ project }) => {
//   const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <Card style={project.style}>
//         <div
//           className="group relative rounded-md cursor-pointer"
//           onClick={openModal}  // Open modal when clicking the project card
//         >
//           <img
//             src={project.img}
//             alt="Project Image"
//             width="auto"
//             height="auto"
//             loading="lazy"
//             title="Project"
//             className="rounded-t-md"
//           />
//           <CardCover text={project.description} style={project.style} />
//         </div>
//         <div className="flex justify-center items-center rounded-b-md">
//           <ProjectsLink name="Code" style={"rounded-md " + project.style.cover} link={project.code} />
//         </div>
//       </Card>

//       {/* Include the modal here */}
//       <ProjectModal project={project} isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// export default Project;

// const ProjectsLink = ({ name, link, style }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noreferrer"
//       className={`w-full py-3 text-center text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}
//     >
//       <Code /> <span className="pl-2">{name}</span>
//     </a>
//   );
// };
import React, { useState } from 'react';
import Card from './Card';
import { Code } from './Icons';
import CardCover from './CardCover';
import ProjectModal from './ProjectModal'; // Import the modal component

const Project = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Card style={project.style}>
        <div
          className="group relative rounded-md cursor-pointer"
          onClick={openModal}  // Open modal when clicking the project card
        >
          <img
            src={project.tileImg} // Display tile image here
            alt="Project Image"
            width="auto"
            height="auto"
            loading="lazy"
            title="Project"
            className="rounded-t-md"
          />
          <CardCover text={project.description} style={project.style} />
        </div>
        <div className='flex justify-center items-center rounded-b-md'>
          <ProjectsLink name="Code" style={"rounded-bl-md " + project.style.cover} link={project.code} />
        </div>
      </Card>

      {/* Include the modal here */}
      <ProjectModal project={project} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Project;

const ProjectsLink = ({ name, link, style }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`w-1/2 py-3 text-center text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}
    >
      <Code />
      <span className="pl-2">{name}</span>
    </a>
  );
};
