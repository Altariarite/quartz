import { Description, FrontMatter, GitHubFlavoredMarkdown, CreatedModifiedDate, Katex, RemoveDrafts } from '@jackyzha0/quartz-plugins'
import pageSingle from './pageSingle'
import pageList from './pageList'
import pageHome from './pageHome'
import head from './head'

/** @type {import("@jackyzha0/quartz-lib").QuartzConfig} */
const quartzConfig = {
  plugins: {
    transformers: [
      new FrontMatter(),
      new GitHubFlavoredMarkdown(),
      new Katex(),
      new Description(),
      new CreatedModifiedDate({
        priority: ['frontmatter', 'filesystem']
      })],
    filters: [
      new RemoveDrafts()
    ],
    emitters: []
  },
  configuration: {
    quartzVersion: "4.0.0",
    name: "Jacky",
    hydrateInteractiveComponents: true,
    ignorePatterns: [],
  },
  components: {
    pageSingle,
    pageList,
    pageHome,
    head
  }
}

export default quartzConfig
