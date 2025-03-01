import { walk } from "jsr:@std/fs";
import { parse as parseYaml } from "jsr:@std/yaml";

interface BlogPost {
  title: string;
  excerpt: string;
  publishesAtDate: string;
  slug: string;
}

export async function getBlogFiles(): Promise<BlogPost[]> {
  const blogPosts: BlogPost[] = [];
  const contentDir = "content";

  // Walk through the content directory
  for await (const entry of walk(contentDir, {
    exts: [".md"],
    includeDirs: false,
  })) {
    const content = await Deno.readTextFile(entry.path);

    // Extract frontmatter between --- markers
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = parseYaml(frontmatterMatch[1]) as BlogPost;

      // Create slug from filename
      const slug = entry.name.replace(/\.md$/, "");

      blogPosts.push({
        ...frontmatter,
        slug,
      });
    }
  }

  // Sort by publish date, most recent first
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishesAtDate).getTime() -
      new Date(a.publishesAtDate).getTime()
  );
}

// Example usage:
if (import.meta.main) {
  const posts = await getBlogFiles();
  const jsonContent = JSON.stringify(posts, null, 2);
  await Deno.writeTextFile("content/blog-index.json", jsonContent);
  console.log("Blog index has been written to content/blog-index.json");
}
