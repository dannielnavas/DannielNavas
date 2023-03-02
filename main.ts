import fs from "fs";
import { format } from "./src/generateTemplate";
import { get } from "./src/service";
(async () => {
  const template = await fs.promises.readFile("template.md.tpl", {
    encoding: "utf-8",
  });

  const posts: any[] = await get("https://dev.to/api/articles?username=dannieldev");

  const content = format(posts);
  console.log(content);
  const output = (await template).replace("%{{article}}%", content);
  await fs.promises.writeFile("README.md", `${output}`);
})();
