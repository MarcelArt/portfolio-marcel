function Skills() {
    const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git', 'Figma'];
  
    return (
      <section id="skills" className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-md shadow-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  