# Biblioteca - Gestão de Livros e Autores

Um sistema completo de gestão de biblioteca desenvolvido com **React 18**, **TypeScript** e **Ant Design**. Aplicação responsiva que permite criar, visualizar e excluir livros e autores com dados persistidos no **IndexedDB**.

## 🎯 Características

- 📚 **CRUD de Livros**: Criar, visualizar e excluir livros
- 👤 **CRUD de Autores**: Gerenciar autores com facilidade
- 💾 **Persistência Local**: Dados armazenados no IndexedDB com `localForage`
- 📱 **Design Responsivo**: Interface adaptável para desktop e mobile
- ⚡ **Performance**: Construído com Vite para desenvolvimento rápido
- 🎨 **UI/UX**: Componentes do Ant Design com tema customizado

## 🛠️ Stack Tecnológico

- **React 18.3** - Biblioteca JavaScript para UI
- **TypeScript** - Type safety e melhor DX
- **Vite** - Build tool moderno e rápido
- **Ant Design 6** - Componentes UI de alta qualidade
- **React Router 7** - Roteamento cliente-side
- **Dayjs** - Manipulação de datas
- **localForage** - Abstração para IndexedDB
- **Docker** - Containerização

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/Lucashackd/desafio-contato-seguro.git

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

## 🐳 Docker

Execução mínima para desenvolvimento com hot reload (Vite).

### Com Docker Compose (recomendado)

```bash
docker compose up --build
```

A aplicação ficará disponível em: `http://localhost:5173`

### Sem Docker Compose

```bash
docker build -t biblioteca-app .
docker run --rm -p 5173:5173 biblioteca-app
```

A aplicação ficará disponível em: `http://localhost:5173`

Se houver erro de execução no PowerShell com `npm.ps1`, rode os comandos via CMD.

### Parar os containers

```bash
docker compose down
```

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── pages/           # Páginas (Authors, Books)
├── layout/          # Layout estrutural
├── services/        # API e lógica de negócios
├── types/           # Tipos TypeScript
├── helpers/         # Funções utilitárias
├── hooks/           # Custom React hooks
├── routes/          # Configuração de rotas
└── App.tsx          # Componente raiz
```

## 🎮 Funcionalidades

### Livros

- Criar novo livro com autor
- Listar todos os livros em tabela
- Visualizar detalhes do livro
- Excluir livro com confirmação

### Autores

- Criar novo autor
- Listar todos os autores
- Visualizar detalhes do autor
- Excluir autor com confirmação

## 📝 Modelos de Dados

### Livro

```typescript
{
  id: string;
  name: string;
  author_id: string;
  pages?: number;
}
```

### Autor

```typescript
{
  id: string;
  name: string;
  email?: string;
}
```

## 🚀 Diferenciais Implementados

- ✅ TypeScript com tipos bem definidos
- ✅ Arquitetura em camadas (services, helpers, types)
- ✅ Componentes reutilizáveis
- ✅ Docker configurado
- ✅ Responsive design
- ✅ Code splitting automático

## 📄 Licença

Projeto desafio Contato Seguro.
