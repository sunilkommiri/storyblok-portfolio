import {
  useStoryblokState,
  getStoryblokApi,
  renderRichText,
} from "@storyblok/react";
import Head from "next/head";
import React, { useEffect } from 'react'; // Import useEffect
import Prism from 'prismjs'; // Import Prism

const Post = ({ story }) => {
  const storyblokState = useStoryblokState(story);

  // This hook runs after the component mounts
  useEffect(() => {
    Prism.highlightAll();
  }, [storyblokState]); // It re-runs if the story content changes

  if (!storyblokState) {
// ... rest of your component code stays the same
    return <div>Loading...</div>;
  }

  // Convert the rich text object from Storyblok into HTML
  const renderedRichText = renderRichText(storyblokState.content.content);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Head>
        <title>{storyblokState.content.title}</title>
      </Head>
      <main>
        <h1>{storyblokState.content.title}</h1>
        <div 
          dangerouslySetInnerHTML={{ __html: renderedRichText }} 
          style={{ lineHeight: '1.6' }}
        ></div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    content_type: "Post", // Using capital 'P' to match your Storyblok setup
    version: "draft",
  });

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const storyblokApi = getStoryblokApi();
  const { slug } = params;

  const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
}

export default Post;