import { html } from "@sapling/sapling";
import Layout from "../../layouts/Layout.ts";
import blogIndex from "../../content/blog-index.json" with { type: "json" };

export default async function About() {
  return await Layout({
    children: html`
      <div
        class="max-w-screen-lg min-h-screen mx-auto px-4 py-16 flex flex-col items-center gap-8"
      >
        <h1 class="text-4xl font-bold">Blog</h1>
        <div class="w-full max-w-2xl space-y-8">
          ${blogIndex.map((post) => {
            const date = new Date(post.publishesAtDate).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            return html`
              <article class="border-b border-gray-200 pb-8">
                <h2 class="text-2xl font-semibold mb-2">
                  <a
                    href="/blog/${post.slug}"
                    class="hover:text-blue-600 transition-colors"
                  >
                    ${post.title}
                  </a>
                </h2>
                <p class="text-gray-600 text-sm mb-3">${date}</p>
                <p class="text-gray-700">${post.excerpt}</p>
              </article>
            `;
          })}
        </div>
      </div>
    `,
  });
}
