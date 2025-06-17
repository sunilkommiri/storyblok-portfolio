import { storyblokInit, apiPlugin } from "@storyblok/react";
import Hero from '../components/Hero';
import '../styles/globals.css';
import Page from "../components/Page";
import ProjectsSection from "../components/ProjectsSection";

const components = {
  page: Page,
  projects_section: ProjectsSection,
  hero: Hero,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;