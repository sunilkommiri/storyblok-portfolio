const ProjectsSection = ({ blok }) => (
  // CHANGED: Added className here
  <div className="projects-container">
    <h2>My Projects</h2>
    {/* CHANGED: Added className here */}
    <div className="projects-grid">
      {blok.projects.map((project) => (
        // CHANGED: Added className and removed inline style
        <div key={project._uid} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          {project.image.filename && (
            // REMOVED: style attribute from img tag
            <img 
              src={project.image.filename} 
              alt={project.image.alt || 'Project image'} 
            />
          )}

          {project.link.url && (
            <a href={project.link.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;