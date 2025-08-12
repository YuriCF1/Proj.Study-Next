import CardPost from "@/components/CardPost";
import { Post } from "@/types";

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

async function getAllPost() {
  const response = await fetch('http://localhost:3042/posts')
    .then(res => {
      if (!res.ok) throw new Error('Erro ao buscar posts')
      return res.json()
    })
  return response
}

export default async function Home() {
  const posts = await getAllPost()
  return (
    <div>
      <main>
        {posts.map((post: Post) => <CardPost key={post.id} post={post} />)}
      </main>
    </div>
  );
}
