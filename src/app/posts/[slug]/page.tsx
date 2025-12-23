import logger from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css'
import CardPost from "@/components/CardPost";

async function getPostBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`
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

const PagePosts = async ({ params }: { params: { slug: string } }) => { //Só é slug pois na pasta está [slug]
  const post = await getPostBySlug(params.slug)
  return (<div>
        <CardPost post={post.postData} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.postData.markedown }} />
        </div>
    </div>)
}

export default PagePosts