import Layout from "../layouts/Layout.ts";

export default function About() {
  return (
    <Layout>
      <div
        class="max-w-screen-lg min-h-screen mx-auto px-4 py-16 flex flex-col items-center justify-center gap-4"
      >
        <h1 class="text-2xl font-bold">About Us</h1>
        <p>Welcome to our website!</p>
        <a class="text-blue-500" href="/">Go back home</a>
      </div>
    </Layout>
  );
}
