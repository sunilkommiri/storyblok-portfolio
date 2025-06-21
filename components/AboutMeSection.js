import { renderRichText } from "@storyblok/react";

const AboutMeSection = ({ blok }) => {
  const bioHtml = renderRichText(blok.bio);

  return (
    <div className="about-section">
      <div className="about-photo">
        <img src={blok.photo.filename} alt={blok.photo.alt || 'Profile photo'} />
      </div>
      <div className="about-text">
        <h2>{blok.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: bioHtml }}></div>
      </div>
    </div>
  );
};

export default AboutMeSection;