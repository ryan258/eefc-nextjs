import fs from "fs";
import path from "path";
import pug from "pug";

export default function About() {
  const pugFilePath = path.join(process.cwd(), "src/app/projects/t2e/page.pug");

  if (!fs.existsSync(pugFilePath)) {
    return <div>Error: About page.pug not found!</div>;
  }

  const pugTemplate = fs.readFileSync(pugFilePath, "utf-8");
  // Fix: Set `basedir` correctly so includes work
  const html = pug.render(pugTemplate, {
    filename: pugFilePath,
    basedir: path.join(process.cwd(), "src/app"),
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
