import { html, raw } from "@sapling/sapling";
import Layout from "../../layouts/Layout.ts";
import { getBlogPost } from "../../utils/getBlogPostContent.ts";
import { renderMarkdown } from "@sapling/markdown";
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Get the blog post
  const post = await getBlogPost(params.slug);
  // Render the markdown
  const rendered = await renderMarkdown(post.content);

  return await Layout({
    title: post.title,
    description: post.excerpt,
    children: html`
      <article class="max-w-screen-md min-h-screen mx-auto px-4 py-16">
        <header class="mb-8">
          <h1 class="text-4xl font-bold mb-4">${post.title}</h1>
          <p class="text-gray-600 @dark:text-gray-400">
            ${new Date(post.publishesAtDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>
        <div class=" prose @dark:prose-invert max-w-screen-md">
          ${raw(rendered)}
        </div>
      </article>
    `,
  });
}
