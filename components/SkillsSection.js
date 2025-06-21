import { StoryblokComponent } from "@storyblok/react";

const SkillsSection = ({ blok }) => (
  <div className="skills-section">
    <h2>{blok.heading}</h2>
    <div className="skills-grid">
      {blok.skill_logos.map(logoBlok => (
        <StoryblokComponent blok={logoBlok} key={logoBlok._uid} />
      ))}
    </div>
  </div>
);

export default SkillsSection;