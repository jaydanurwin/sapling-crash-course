import { Picture } from "@sapling/image";

interface BlogPost {
  title: string;
  excerpt: string;
  publishesAtDate: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
  showImages?: boolean;
  maxPosts?: number;
  showExcerpt?: boolean;
  layout?: 'grid' | 'stack';
}

export default function BlogList({ 
  posts, 
  showImages = true, 
  maxPosts,
  showExcerpt = true,
  layout = 'stack'
}: BlogListProps) {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  const containerClass = layout === 'grid' 
    ? "w-full grid gap-8 md:grid-cols-2" 
    : "w-full space-y-8";

  return (
    <div class={containerClass}>
      {displayPosts.map((post) => {
        const date = new Date(post.publishesAtDate).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );
        
        return (
          <article class="group transition-all duration-300 hover:transform hover:-translate-y-2 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100">
            {showImages && (
              <div class="overflow-hidden">
                <Picture
                  src={`/images/blog/${post.slug}/featured`}
                  alt={post.title}
                  width={1024}
                  height={768}
                  imgClass="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <time dateTime={post.publishesAtDate}>{date}</time>
              </div>
              <h2 class="text-xl font-bold leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                <a
                  href={`/blog/${post.slug}`}
                  class="block"
                >
                  {post.title}
                </a>
              </h2>
              {showExcerpt && (
                <p class="text-gray-600 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
              )}
              <div class="pt-2">
                <a
                  href={`/blog/${post.slug}`}
                  class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium group/link"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/link:translate-x-1 transition-transform duration-200">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
} 