import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <img src={project.img} alt={project.name} className="rounded-lg mb-6 w-full max-w-3xl" />
      <p className="mb-4 text-lg">{project.description}</p>

      <div className="text-left max-w-4xl">
        <h2 className="text-2xl mb-4">Project Structure</h2>
        <p>Here you can include a more detailed description of the project structure, technologies used, etc.</p>

        {/* Add more detailed project-specific content */}
      </div>

      <div className="flex space-x-4 mt-8">
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          View Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
