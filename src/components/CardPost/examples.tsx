import { Post, CardPostProps, CardPostOptionalProps } from '../../types';

// 1. Abordagem com interface importada (RECOMENDADA)
const CardPost1 = ({ post }: CardPostProps) => {
  return <div>{post.title}</div>;
};

// 2. Tipagem inline (para props simples)
const CardPost2 = ({ title, body }: { title: string; body: string }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

// 3. Props opcionais
const CardPost3 = ({ post, className, onClick }: CardPostOptionalProps) => {
  return (
    <div className={className} onClick={() => onClick?.(post!)}>
      {post?.title}
    </div>
  );
};

// 4. Props com valores padrão
const CardPost4 = ({ 
  post, 
  className = "card-post",
  showAuthor = true 
}: CardPostProps & { 
  className?: string; 
  showAuthor?: boolean;
}) => {
  return (
    <div className={className}>
      <h3>{post.title}</h3>
      {showAuthor && <p>Autor: {post.author.name}</p>}
    </div>
  );
};

// 5. Props com children
const CardPost5 = ({ 
  post, 
  children 
}: CardPostProps & { 
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      {children}
    </div>
  );
};

// 6. Props com função callback
const CardPost6 = ({ 
  post, 
  onPostClick 
}: CardPostProps & { 
  onPostClick: (post: Post) => void;
}) => {
  return (
    <div onClick={() => onPostClick(post)}>
      <h3>{post.title}</h3>
    </div>
  );
};

export { CardPost1, CardPost2, CardPost3, CardPost4, CardPost5, CardPost6 }; 