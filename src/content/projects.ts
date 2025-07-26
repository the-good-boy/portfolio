interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "Web Crawler",
    description: "Domain-specific web crawler written in Go with MongoDB as a web archive. Parses pages for keywords and creates an inverted index table for search queries.",
    tags: ["Go", "MongoDB"],
    liveLink: "",
    devLink: "https://github.com/the-good-boy/web-crawler",
  }
]

export default projects;
