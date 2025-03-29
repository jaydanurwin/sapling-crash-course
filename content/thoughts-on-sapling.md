---
title: "Introducing Sapling: A Lightweight Web Framework"
excerpt: "Discover Sapling, a simple, fast, and modern web framework for building server-rendered websites with TypeScript."
publishesAtDate: 2024-01-28
---

## What is Sapling?

[Sapling](https://sapling.land/) is a fresh take on web development. It's a lightweight web framework designed specifically for building server-rendered websites using **TypeScript**. The core idea? Simplicity, speed, and a developer experience that embraces web standards.

If you're looking for a way to build websites that are fast, SEO-friendly, and don't require complex setups, Sapling might be just what you need.

## Why Choose Sapling?

Sapling stands out for several key reasons:

1.  **Zero Client-Side JavaScript by Default:** Pages are rendered on the server, leading to faster load times and better performance, especially on slower connections or devices. You add JS only when necessary.
2.  **No Build Step Required (in Development):** Jump straight into coding without wrestling with complex bundler configurations. Sapling works seamlessly with TypeScript out of the box.
3.  **Multi-Runtime Support:** Whether you prefer Deno, Node.js, or Bun, Sapling runs smoothly across different JavaScript runtimes.
4.  **Built-in "Tailwind" Experience:** Sapling integrates [UnoCSS](https://unocss.dev/), allowing you to use familiar Tailwind CSS classes without the traditional build step, generating styles on the fly.
5.  **Simplicity Meets Power:** Enjoy features like type-safe HTML templating, straightforward routing, built-in Markdown support, and an easy-to-use layout system. Here's a glimpse:

    *   **Simple Components:** Creating components feels intuitive.
    ```typescript
    import { html } from "@sapling/sapling";

    function Greeting() {
      return html`
        <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-2xl font-bold">Hello, World!</h1>
        </div>
      `;
    }

    
    ```

    ```typescript
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
                        ${Picture({
                        src: `images/blog/${post.slug}/featured`,
                        alt: post.title,
                        width: 1024,
                        height: 768,
                        imgClass: "w-full h-60 object-cover rounded-lg mb-4",
                        })}
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
    ```

    *   **Easy Routing:** Defining page routes is straightforward.
    ```typescript
    // Add this to your main site file (e.g., index.ts)
    // Assumes you have a Home component defined
    site.get("/", async (c) => c.html(await Home()));
    ```

## When is Sapling a Good Fit?

Sapling excels for:

*   Content-focused websites (blogs, documentation, marketing sites)
*   Server-rendered applications where SEO and initial load performance are critical
*   Traditional multi-page applications
*   Adding web pages to an existing API without a separate frontend project

While it *can* be used with frontend frameworks like React or Svelte, its strength lies in generating efficient HTML directly on the server.

## Getting Started

Intrigued? Sapling is designed to be easy to learn. Check out the official documentation and quick start guides to begin your journey:

*   [Sapling Website](https://sapling.land/)
*   [Quick Start (Deno)](https://sapling.land/docs/quick-start-deno)
*   [Quick Start (Node.js)](https://sapling.land/docs/quick-start-node)

Give Sapling a try and experience a simpler, faster way to build for the web!
