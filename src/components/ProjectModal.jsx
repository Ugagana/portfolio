// import React from "react";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null; // Modal will only render if it's open

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="bg-white rounded-lg max-w-lg w-full p-6 relative"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         <button
//           className="absolute top-2 right-2 text-black text-xl font-bold"
//           onClick={onClose} // Close button
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
//         <img src={project.img} alt={project.name} className="rounded-lg mb-4" />
//         <p className="mb-4">{project.description}</p>
//         <div className="flex justify-between">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             View Code
//           </a>
//           <a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-600 text-white px-4 py-2 rounded-md"
//           >
//             View Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;

// import React from "react";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null; // Modal will only render if it's open

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="bg-white rounded-lg max-w-4xl w-full h-auto p-10 relative" // Adjusted max-width and padding
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         <button
//           className="absolute top-2 right-2 text-black text-xl font-bold"
//           onClick={onClose} // Close button
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
//         <img src={project.img} alt={project.name} className="rounded-lg mb-4 w-full" />
//         <p className="mb-4">{project.description}</p>
//         <div className="flex justify-between">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             View Code
//           </a>
//           <a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-600 text-white px-4 py-2 rounded-md"
//           >
//             View Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;
// import React from "react";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null; // Modal will only render if it's open

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-auto"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="bg-white rounded-lg max-w-6xl w-full h-auto p-10 relative max-h-[90vh] overflow-y-auto" // Enlarged modal and made it scrollable
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         <button
//           className="absolute top-2 right-2 text-black text-xl font-bold"
//           onClick={onClose} // Close button
//         >
//           &times;
//         </button>
//         <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
//         <img src={project.img} alt={project.name} className="rounded-lg mb-4 w-full" />
//         <p className="mb-4">{project.description}</p>

//         {/* Remove Demo Button */}
//         <div className="flex justify-center mt-8">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-6 py-3 rounded-md"
//           >
//             View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;
// import React from "react";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null; // Modal will only render if it's open

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="bg-white rounded-lg max-w-4xl w-full h-[80vh] p-10 relative overflow-y-scroll" // Set height and enable scroll
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//         style={{ color: 'black' }}  // Ensure the text color is black
//       >
//         <button
//           className="absolute top-2 right-2 text-black text-xl font-bold"
//           onClick={onClose} // Close button
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
//         <img src={project.img} alt={project.name} className="rounded-lg mb-4 w-full" />
//         <p className="mb-4">{project.fullDetails}</p>
//         <div className="flex justify-between">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;

// import React from "react";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="relative bg-white text-black rounded-lg w-full max-w-4xl h-[90vh] p-10 overflow-y-auto"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         {/* Fixed Close Button */}
//         <button
//           className="absolute top-4 right-4 text-red-600 text-2xl font-bold z-50"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

//         {/* Display full image in the modal */}
//         {project.fullImg && (
//           <img
//             src={project.fullImg}
//             alt={project.name}
//             className="rounded-lg mb-4 w-full"
//           />
//         )}

//         {/* Render fullDetails as HTML */}
//         <div
//           className="project-details-content text-gray-800"
//           dangerouslySetInnerHTML={{ __html: project.fullDetails }}
//         />

//         <div className="flex justify-start mt-6">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;
// import React from "react";
// import { useEffect } from 'react';
// const ProjectModal = ({ project, isOpen, onClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';  // Disable background scroll
//     } else {
//       document.body.style.overflow = 'auto';    // Re-enable background scroll
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//       onClick={onClose} // Close modal when clicking outside the content
//     >
//       <div
//         className="relative bg-white text-black rounded-lg w-full max-w-4xl h-[90vh] p-10 overflow-y-auto"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         {/* Fixed Close Button */}
//         <button
//           className="absolute top-4 right-4 text-red-600 text-2xl font-bold z-50"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

//         {/* Full image in the modal */}
//         {project.fullImg && (
//           <img
//             src={project.fullImg}
//             alt={project.name}
//             className="rounded-lg mb-4 w-full"
//           />
//         )}

//         {/* Apply text-justify to fullDetails */}
//         <div
//           className="project-details-content text-gray-800 text-justify"
//           dangerouslySetInnerHTML={{ __html: project.fullDetails }}
//         />

//         <div className="flex justify-start mt-6">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;
import React, { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}  // Closes modal when clicking outside of the content
    >
      <div
        className="relative bg-white text-black rounded-lg w-full max-w-6xl h-[90vh] p-10 overflow-y-auto z-50"
        style={{ marginTop: '100px' }}
        onClick={(e) => e.stopPropagation()}  // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
  className="absolute top-4 right-4 text-red-600 text-2xl font-bold z-50"
  onClick={() => {
    console.log('Close button clicked'); // Add this log here
    onClose();
  }}
>
  &times;
</button>

        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

        {/* Full image in the modal */}
        {project.fullImg && (
          <img
            src={project.fullImg}
            alt={project.name}
            className="rounded-lg mb-4 w-full"
          />
        )}

        {/* Apply text-justify to fullDetails */}
        <div
          className="project-details-content text-gray-800 text-justify"
          dangerouslySetInnerHTML={{ __html: project.fullDetails }}
        />

        <div className="flex justify-start mt-6">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
