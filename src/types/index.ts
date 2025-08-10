// Props do componente CardPost
export interface CardPostProps {
  post: Post;
}

// Tipos para Author
export interface Author {
  // id: number;
  name: string;
  username: string;
  avatar: string;
  imageAlt: string;
  userName: string;
}

// Tipos para Post
export interface Post {
  id: number;
  altImg: string;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
}



// Props opcionais (exemplo)
export interface CardPostOptionalProps {
  post?: Post;
  className?: string;
  onClick?: (post: Post) => void;
} 