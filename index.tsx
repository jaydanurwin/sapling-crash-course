import { Hono, type Context } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import NotFoundLayout from "./layouts/NotFoundLayout.ts";
import { Home } from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/blog/index.tsx";
import BlogPost from "./pages/blog/[slug].tsx";

const app = new Hono();

// Home page
app.get("/", (c: Context) => c.html(<Home />));
app.get("/blog", (c: Context) => c.html(<Blog />));

// Blog post page
app.get("/blog/:slug", (c: Context) => {
  const slug = c.req.param("slug");
  return c.html(<BlogPost params={{ slug }} />);
});

app.get("/about",  (c: Context) => c.html(<About />));
// Enter additional routes here

// Serve static files
// The location of this is important. It should be the last route you define.
app.get("*", serveStatic({ root: "./static" }));

// 404 Handler
app.notFound(async (c) => c.html(await NotFoundLayout()));

Deno.serve({
  port: 3000,
  onListen: () =>
    console.log(
      `\nSapling Server is running on %chttp://localhost:3000\n`,
      "color: green; font-weight: bold"
    ),
  handler: app.fetch,
});
