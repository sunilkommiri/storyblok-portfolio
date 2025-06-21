const SkillLogo = ({ blok }) => (
  <div className="skill-logo-item">
    <img src={blok.logo_image.filename} alt={blok.logo_image.alt || 'Technology logo'} />
    <p>{blok.logo_image.name}</p>
  </div>
);

export default SkillLogo;