# Tipagem de Props em React com TypeScript

## Estrutura Recomendada

### 1. Arquivo Centralizado de Tipos (`src/types/index.ts`)
- Centraliza todas as interfaces e tipos do projeto
- Facilita a manutenção e reutilização
- Evita duplicação de código

### 2. Abordagens de Tipagem

#### ✅ **RECOMENDADA: Interface Importada**
```typescript
import { CardPostProps } from '../../types';

const CardPost = ({ post }: CardPostProps) => {
  return <div>{post.title}</div>;
};
```

#### ✅ **Para Props Simples: Tipagem Inline**
```typescript
const CardPost = ({ title, body }: { title: string; body: string }) => {
  return <div>{title}</div>;
};
```

#### ✅ **Props Opcionais**
```typescript
interface CardPostProps {
  post: Post;
  className?: string; // opcional
  onClick?: (post: Post) => void; // opcional
}
```

#### ✅ **Props com Valores Padrão**
```typescript
const CardPost = ({ 
  post, 
  className = "card-post" 
}: CardPostProps & { className?: string }) => {
  return <div className={className}>{post.title}</div>;
};
```

### 3. Boas Práticas

1. **Nunca use `any`** - Sempre defina tipos específicos
2. **Use interfaces para objetos complexos**
3. **Use `?` para props opcionais**
4. **Centralize tipos reutilizáveis**
5. **Use union types para múltiplas possibilidades**

### 4. Exemplos de Tipos Comuns

```typescript
// Props básicas
interface BasicProps {
  title: string;
  description?: string;
}

// Props com children
interface WithChildrenProps {
  children: React.ReactNode;
}

// Props com função callback
interface WithCallbackProps {
  onSave: (data: FormData) => void;
}

// Props com estado
interface WithStateProps {
  isActive: boolean;
  isLoading?: boolean;
}
```

### 5. Vantagens da Tipagem

- **IntelliSense**: Autocompletar no editor
- **Detecção de erros**: Erros em tempo de compilação
- **Documentação**: O código se auto-documenta
- **Refatoração segura**: Mudanças são detectadas automaticamente
- **Melhor DX**: Desenvolvimento mais produtivo 