import fs from "fs";
import fetch from "node-fetch";

(async () => {
  const template = await fs.promises.readFile("./template.md", "utf8");

  const response = await fetch("https://dev.to/api/articles?username=dannieldev");
  const posts = await response.json();

  let HTMLPosts = [];
  HTMLPosts = posts
    .slice(0, 3)
    .map((post) => `<li><a href="${post.url}">${post.title}<a/></li>`)
    .join("");

  const newMarkdown = (await template).replace(
    "%{{latest_Article}}%",
    `<ul>${HTMLPosts}</ul>`
  );

  await fs.promises.writeFile("./README.md", newMarkdown);
})();
