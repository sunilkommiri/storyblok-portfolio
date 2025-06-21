import { storyblokInit, apiPlugin } from "@storyblok/react";
import Hero from '../components/Hero';
import '../styles/globals.css';
import Page from "../components/Page";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkillsSection from '../components/SkillsSection';
import SkillLogo from '../components/SkillLogo';
import AboutMeSection from '../components/AboutMeSection';
import 'prismjs/themes/prism-tomorrow.css';
const components = {
  page: Page,
  projects_section: ProjectsSection,
  hero: Hero,
  footer:Footer,
  skills_section: SkillsSection,
  skill_logo: SkillLogo,
  about_me_section: AboutMeSection,
};


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
}
);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;