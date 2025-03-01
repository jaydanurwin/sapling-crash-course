import { Sapling, serveStatic, type Context } from "@sapling/sapling";
import NotFoundLayout from "./layouts/NotFoundLayout.ts";
import { Home } from "./pages/Home.ts";
import About from "./pages/About.ts";
import Blog from "./pages/blog/index.ts";
import BlogPost from "./pages/blog/[slug].ts";

const site = new Sapling({
  // this will disable caching for static files in development
  // it is automatically passed in when you run deno task dev
  dev: Deno.env.get("ENV") === "development",
});

// Home page
site.get("/", async (c: Context) => c.html(await Home()));
site.get("/blog", async (c: Context) => c.html(await Blog()));

// Blog post page
site.get("/blog/:slug", async (c: Context) => {
  const slug = c.req.param("slug");
  return c.html(await BlogPost({ params: { slug } }));
});

site.get("/about", async (c: Context) => c.html(await About()));
// Enter additional routes here

// Serve static files
// The location of this is important. It should be the last route you define.
site.get("*", serveStatic({ root: "./static" }));

// 404 Handler
site.notFound(async (c) => c.html(await NotFoundLayout()));

Deno.serve({
  port: 3000,
  onListen: () =>
    console.log(
      `\nSapling Server is running on %chttp://localhost:3000\n`,
      "color: green; font-weight: bold"
    ),
  handler: site.fetch,
});
