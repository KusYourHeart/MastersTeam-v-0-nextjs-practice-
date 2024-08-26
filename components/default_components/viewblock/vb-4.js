"use client";   
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Vb5 = () => {
  // State to control the visibility of the modal and the current project
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Define your projects in an array or fetch them from an API
  const projects = [
    { id: 1, title: 'Sorp Buisness Center', description: 'The most complete and up-to-date business center Dubai', imageUrl: '/projects/prj1.webp' },
    { id: 2, title: 'Villa 14, Balqis Residence', description: 'Luxury Apartments at Balqis Residence enjoys a location in Dubai.', imageUrl: '/projects/prj2.webp' },
    { id: 3, title: 'Nail it limited', description: 'Beauty salon top quality materials highly qualified', imageUrl: '/projects/prj3.webp' },
    { id: 4, title: 'Leonardo Da Vinci R.', description: 'An Italian restaurant, which transports guests back to the Renaissance', imageUrl: '/projects/prj4.webp' },
    { id: 5, title: 'Opera Dubai House', description: 'Dubai Opera is part of The Opera District within Downtown Dubai.', imageUrl: '/projects/prj5.webp' },
    { id: 6, title: 'Rehabilitation of FST', description: 'Tunnel rehabilitation services to allow for safer operating conditions and travel', imageUrl: '/projects/prj6.webp' },
    // ...other projects
  ];

  // Function to open modal with specific project details
  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400 mb-10">
          Our Projects
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col justify-center space-y-4">
              <Image
                alt={project.title}
                className="p-2 aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={400}
                width={600}
                src={project.imageUrl}
                layout="responsive"
              />
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-orange-400">{project.title}</h3>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {project.description}
              </p>
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600"
                onClick={() => openModal(project)}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal} // Закрывает модальное окно при клике на фон.
  >
    <div
      className="bg-white p-4 rounded-lg"
      onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике внутри модального окна.
    >
      <Image src={currentProject.imageUrl} alt={currentProject.title} width={1500} height={800} />
      <button className="mt-4 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600" onClick={closeModal}>
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default Vb5;