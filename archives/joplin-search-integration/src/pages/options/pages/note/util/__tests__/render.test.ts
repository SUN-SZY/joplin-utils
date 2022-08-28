import unified from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import MarkdownIt from 'markdown-it'
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

describe('测试 markdown 渲染', () => {
  it('unified', async () => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remark2rehype)
      .use(rehypePrism)
      .use(rehypeStringify)
    // language=Markdown
    const html = processor.processSync('# title\n\n- [ ] task 1\n- [ ] task 2')
      .contents
    console.log(html)
  })
  it('markdown-it', () => {
    const markdownIt = new MarkdownIt()
    const res = markdownIt.render('# title')
    console.log(res)
  })
  // it('测试 render', () => {
  //   const str = render('# title')
  //   expect(str).toBe('<h1>title</h1>')
  // })
})
