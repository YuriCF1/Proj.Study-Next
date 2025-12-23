import logger from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css'
import CardPost from "@/components/CardPost";

async function getPostBySlug(slug: string) {
  const url = `https://proj-json-servers.onrender.com/posts?slug=${slug}`

  const response = await fetch(url)
  if (!response.ok) {
    logger.error("Op, alguma coisa deu errada")
    return {}
  }
  logger.info("Post carregado com sucesso")
  const data = await response.json()
  if (data.length === 0) {
    logger.error("Post nao encontrado")
    return {}
  }
  const postData = data[0]
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(postData.markdown);
  const contentHtml = processedContent.toString();
  postData.markedown = contentHtml
  return { postData }
}

type PageProps = {
  params: Promise<{ slug: string }>
}

const PagePosts = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <div>
      <CardPost post={post.postData} highlight />

      <h3 className={styles.subtitle}>Código:</h3>

      <div className={styles.code}>
        <div
          dangerouslySetInnerHTML={{
            __html: post.postData.markedown,
          }}
        />
      </div>
    </div>
  )
}

export default PagePosts