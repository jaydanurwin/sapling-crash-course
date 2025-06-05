import Layout from "../../layouts/Layout.ts";
import BlogList from "../../components/BlogList.tsx";
import blogIndex from "../../content/blog-index.json" with { type: "json" };

export default function About() {
  return (
    <Layout>
      <div class="max-w-4xl mx-auto px-4 py-8">
        <header class="text-center py-16 mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            All posts about development, technology, and thoughtful observations.
          </p>
        </header>

        <div class="max-w-3xl mx-auto">
          <BlogList posts={blogIndex} showImages={true} showExcerpt={true} />
        </div>
      </div>
    </Layout>
  );
}
