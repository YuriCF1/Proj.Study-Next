import CardPost from "@/components/CardPost";
import { Post } from "@/types";
import logger from "@/logger";
import styles from './page.module.css'
import Link from "next/link";

// import Image from "next/image";
// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//     "id": 101,
//     "name": "Ana Beatriz",
//     "username": "anabeatriz_dev",
//     "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
//     "imageAlt": "Imagem de Ana Beatriz",
//     "userName": "anabeatriz_dev"
//   },
//   "altImg": "Imagem de Ana Beatriz"
// }

// 
// async function getAllPosts () {
//   const response = await fetch('http://localhost:3042/posts').catch(error => {
//     logger.error('Erro de rede: ' + error.message);
//     return null;
//   });
//   if (!response || !response.ok) {
//     logger.error('Problema ao obter os posts');
//     return [];
//   }
//   return response.json();
// }

async function getAllPost(page: number) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    // throw new Error('Erro ao buscar posts')
    logger.error('Erro ao buscar posts')
    return []
  }
  logger.info('Posts buscados com sucesso')
  const data = await response.json()
  return data
}

// Revisando outra maneira
// async function getAllPost() {
//   const response = await fetch('http://localhost:3042/posts')
//     .then(res => {
//       if (!res.ok) throw new Error('Erro ao buscar posts')
//       return res.json()
//     })
//   return response
// }

export default async function Home() {
  const {data: posts, prev, next} = await getAllPost(1)
  console.log('prev' + ' ' + prev, 'next' + ' ' + next);
  return (
    <div>
      <main className={styles.grid}>
        {posts.map((post: Post) => <CardPost key={post.id} post={post} />)}
        {prev && <Link href={`/?page=${prev}`}>Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Proximo</Link>}
      </main>
    </div>
  );
}
