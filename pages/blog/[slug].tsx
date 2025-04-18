import { html, raw } from "@hono/hono/html";
import Layout from "../../layouts/Layout.ts";
import { getBlogPost } from "../../utils/getBlogPostContent.ts";
import { renderMarkdown } from "@sapling/markdown";
import Picture from "../../components/Picture.tsx";
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Get the blog post
  const post = await getBlogPost(params.slug);
  // Render the markdown
  const rendered = await renderMarkdown(post.content, {
    shikiOptions: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
  });

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      head={html`
      <script type="module">
        import CopyCode from "/scripts/CopyCode.js";
        
      </script>
      <script>
      document.addEventListener('DOMContentLoaded', () => {
          const preElements = document.querySelectorAll('pre');
          preElements.forEach(pre => {
            // Make pre tag relative for absolute positioning of button
            pre.style.position = 'relative';
            
            // Create and append copy button
            const copyButton = document.createElement('copy-code-button');
            copyButton.style.position = 'absolute';
            copyButton.style.top = '0.5rem';
            copyButton.style.right = '0.5rem';
            pre.appendChild(copyButton);
          });
        });
      </script>
    `}
    >
      <article class="max-w-screen-md min-h-screen mx-auto px-4 py-16">
        <header class="mb-8">
          <Picture
            src={`/images/blog/${post.slug}/featured`}
            alt={post.title}
            width={1024}
            imgClass="w-full h-[400px] object-cover rounded-lg mb-4"
            height={768}
          />
          <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
          <p class="text-gray-600 @dark:text-gray-400">
            {new Date(post.publishesAtDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>
        <div class=" prose @dark:prose-invert max-w-screen-md">
          {raw(rendered)}
        </div>
      </article>
    </Layout>
  );
}
