import { StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
  // The <main> tags have been removed from here and replaced with a React Fragment (<>).
  // This just groups the elements without adding an extra tag to the HTML.
  <>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </>
);

export default Page;