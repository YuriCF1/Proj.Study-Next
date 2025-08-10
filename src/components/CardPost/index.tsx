import { CardPostProps } from '../../types';
import Image from 'next/image'
import Avatar from '../Avatar';

const CardPost = ({ post }: CardPostProps) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} alt={post.altImg} width={438} height={133} />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <footer>
          <Avatar name={post.author.userName} imageSrc={post.author.avatar} imageAlt={post.author.imageAlt} />
        </footer>
      </section>
    </article>
  )
}

export default CardPost