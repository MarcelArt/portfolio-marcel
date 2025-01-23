function Projects() {
    const projects = [
      { title: 'Project One', description: 'A cool project using React.', img: '/images/project1.png' },
      { title: 'Project Two', description: 'A unique project built with Tailwind.', img: '/images/project2.png' },
      // Add more projects here
    ];
  
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden mx-3">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  