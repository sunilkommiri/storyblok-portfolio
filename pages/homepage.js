import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  const storyblokState = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>My Awesome Portfolio</h1>
      </header>

      {/* This component will render the content from Storyblok */}
      <StoryblokComponent blok={storyblokState.content} />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "homepage";
  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}