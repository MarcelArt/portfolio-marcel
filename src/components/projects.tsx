import modelCraft from '../assets/modelCraft.jpg';
import ollama from '../assets/ollama.png';

function Projects() {
    const projects = [
      { title: 'ModelCraft', description: 'A scaffolder to quickly start Golang backend project', img: modelCraft, url: 'https://github.com/MarcelArt/ModelCraft' },
      { title: 'Ollama Query', description: 'An AI assistant based on llama3.2 that can do SQL query and summarize query result in human-friendly way', img: ollama, url: 'https://github.com/MarcelArt/ollama-query' },
      { title: 'AR Bangun Ruang', description: 'An AR application that help students visualize basic geomtery built with Vuforia and Unity engine', img: 'https://docs.unity3d.com/2017.4/Documentation/uploads/Main/vuforia_logo.png', url: 'https://github.com/MarcelArt/ARBangunRuangV3' },
      { title: 'Beat Parsec', description: 'A rhythm based shoot \'em up space combat built in Unity', img: 'https://img.itch.zone/aW1nLzQ2MzcwNzIucG5n/315x250%23c/hzRt0%2F.png', url: 'https://googolplanck.itch.io/beat-parsec' },
      { title: 'Stick S\'mores', description: 'A rhythm based stabbing marshmallow mini game built in Unity', img: 'https://img.itch.zone/aW1nLzQ3MjAxOTkucG5n/315x250%23c/Ex2jkU.png', url: 'https://googolplanck.itch.io/stick-smores' },
      { title: 'Swatted', description: 'Whack a fly mini game built in Unity', img: 'https://img.itch.zone/aW1nLzQ3Mzc0NzkucG5n/315x250%23c/sJ1Zyj.png', url: 'https://googolplanck.itch.io/swatted' },
      // Add more projects here
    ];
  
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.url} target="_blank" key={index} className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden mx-3">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  