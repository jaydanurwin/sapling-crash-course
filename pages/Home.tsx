import Layout from "../layouts/Layout.ts";
import BlogList from "../components/BlogList.tsx";
import blogIndex from "../content/blog-index.json" with { type: "json" };

export function Home() {
  return (
    <Layout>
      <main class="max-w-4xl mx-auto px-4 py-8 font-sans">
        {/* Hero Section */}
        <header class="text-center py-20 mb-20 relative">
          {/* Background decoration */}
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-1/4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div class="absolute top-32 right-1/4 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
          
          <div class="relative z-10">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Developer Notes
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Thoughts on development, technology, and the quiet wisdom found in 
              building meaningful software.
            </p>
            
            {/* Newsletter Signup */}
            <div class="max-w-md mx-auto mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Stay updated with new posts
              </h3>
              <form class="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  class="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p class="text-sm text-gray-500 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </header>

        {/* Recent Posts Section */}
        <section class="mb-20">
          <div class="flex items-center justify-between mb-10">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-2">Recent Posts</h2>
              <p class="text-gray-600">Latest thoughts and discoveries</p>
            </div>
            <a
              href="/blog"
              class="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              View all posts
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
          
          <BlogList posts={blogIndex} maxPosts={4} showImages={true} layout="grid" />
        </section>

        {/* About Section */}
        <section class="border-t border-gray-200 pt-20">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">About</h2>
            <div class="prose prose-lg mx-auto text-gray-600">
              <p class="leading-relaxed mb-6">
                Welcome to my corner of the internet. I write about software development, 
                share insights from building products, and explore the intersection of 
                technology and thoughtful design.
              </p>
              <p class="leading-relaxed mb-8">
                Whether you're a fellow developer, a curious learner, or someone interested 
                in the craft of building digital experiences, I hope you find something 
                valuable here.
              </p>
            </div>
            <a
              href="/about"
              class="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-lg"
            >
              Learn more about me
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Footer CTA */}
        <section class="mt-20 py-16 bg-gray-50 rounded-2xl text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Let's connect
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions, ideas, or just want to chat about development? 
            I'd love to hear from you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an email
            </a>
            <a
              href="https://twitter.com/yourusername"
              class="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
              Follow on Twitter
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
