import { CardPostProps } from '../../types';
import Image from 'next/image'
import Avatar from '../Avatar';
import styles from './cardPost.module.css';

const CardPost = ({ post }: CardPostProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image src={post.cover} alt={`Imagem de ${post.title}`} width={438} height={133} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <footer className={styles.footer}>
          {/* <Avatar name={post.author.userName} imageSrc={post.author.avatar} imageAlt={post.author.userName} /> */}
          <Avatar name={post.author.userName} imageSrc={post.author.avatar} imageAlt={`Imagem da ${post.author.userName}`} />
        </footer>
      </section>
    </article>
  )
}

export default CardPost