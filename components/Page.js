import { StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
  <main>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;