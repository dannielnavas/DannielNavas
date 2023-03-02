export const format = (posts: any[]) => {
  return posts
    .slice(0, 3)
    .map((post) => {
      return `## [${post.title}](${post.url})\n\n
    ${post.description} \n\n`;
    })
    .join("");
};
