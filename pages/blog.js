import { getStoryblokApi } from "@storyblok/react";
import Link from "next/link";
import Head from "next/head";
import { renderRichText } from "@storyblok/react";

const Blog = ({ posts }) => (
  <div style={{ padding: '20px' }}>
    <Head>
      <title>My Blog</title>
    </Head>
    <main>
        <h1>My Blog</h1>
        <p>Here are my latest posts on technology and development.</p>
        <div>
          {posts.map((post) => (
            <div key={post.slug} style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              <h2>
                <Link href={`/blog/${post.slug}`}>
                  {post.content.title}
                </Link>
              </h2>
              <p>{post.content.summary}</p>
              <span style={{ color: '#555', fontSize: '0.9rem' }}>
  {post.readingTime.text}
</span>
              <Link href={`/blog/${post.slug}`} style={{ fontWeight: 'bold' }}>
                Read more...
              </Link>
            </div>
          ))}
        </div>
    </main>
  </div>
);

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    content_type: "Post",
    version: "draft",
  });

  return {
    props: {
      posts: data ? data.stories : [],
    },
    revalidate: 3600,
  };
}

export default Blog;