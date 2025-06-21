import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  const storyblokState = useStoryblokState(story);

  return (
    // The <main> tag is the wrapper for the sticky footer fix
    <main>
      <div>
        <Head>
          <title>My Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {/* This StoryblokComponent renders all the blocks from your homepage story */}
        <StoryblokComponent blok={storyblokState.content} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi();
  
  let sbParams = {
    version: "draft", // Or "published"
  };

  // Fetches the story with the slug "homepage"
  let { data } = await storyblokApi.get("cdn/stories/homepage", sbParams);

  return {
    props: {
      story: data ? data.story : false,
      // The key prop is removed here to fix the terminal warning
    },
    revalidate: 3600, // Re-generates the page every hour
  };
}