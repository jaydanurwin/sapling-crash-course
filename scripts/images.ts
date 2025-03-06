import { optimizeImages } from "@sapling/image";

await optimizeImages({
  entries: [
    {
      input: "src/images/blog/nature-walk",
      output: "static/images/blog/nature-walk",
    },
    {
      input: "src/images/blog/nature-walk-2024",
      output: "static/images/blog/nature-walk-2024",
    },
    {
      input: "src/images/blog/thoughts-on-sapling",
      output: "static/images/blog/thoughts-on-sapling",
    },
  ],
})
  .then(console.log)
  .catch(console.error);
