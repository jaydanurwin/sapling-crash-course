import { parse as parseYaml } from "jsr:@std/yaml";

interface BlogPost {
  title: string;
  excerpt: string;
  publishesAtDate: string;
  slug: string;
  content: string;
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  try {
    // Read the markdown file
    const content = await Deno.readTextFile(`content/${slug}.md`);

    // Extract frontmatter between --- markers
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
    if (!frontmatterMatch) {
      throw new Error("Invalid blog post format: Missing frontmatter");
    }

    const [_, frontmatterYaml, markdownContent] = frontmatterMatch;
    const frontmatter = parseYaml(frontmatterYaml) as Omit<
      BlogPost,
      "content" | "slug"
    >;

    return {
      ...frontmatter,
      slug,
      content: markdownContent.trim(),
    };
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      throw new Error(`Blog post not found: ${slug}`);
    }
    throw error;
  }
}
