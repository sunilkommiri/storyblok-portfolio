import { motion } from 'framer-motion';

const ProjectsSection = ({ blok }) => (
  <div className="projects-container">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {blok.projects.map((project) => (
        // The opening tag just ends with a single >
        <motion.div
          key={project._uid}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* All this content is now correctly INSIDE the motion.div */}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          {project.image.filename && (
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
        </motion.div> 
        // The closing tag is here, after all the content
      ))}
    </div>
  </div>
);

export default ProjectsSection;