# Desafio de front-end

O objetivo principal do desafio é desenvolver um **CRUD** de livros e autores.

**A ideia não é que você use as melhores e maiores tecnologias do mercado, mas sim que você consiga mostrar o seu melhor fazendo o básico de maneira bem feita.**

## Modelos

### Livro

Um **livro** tem as seguintes propriedades:

- id *(obrigatório)*
- name *(obrigatório)*
- author_id *(obrigatório)*
- pages *(opcional)*

### Autor

Um **autor** tem as seguintes propriedades:

- id *(obrigatório)*
- name *(obrigatório)*
- email *(opcional)*

## Funcionalidades

- Criar um livro *(modal)*
- Visualizar todos os livros *(tabela)*
- Visualizar um livro específico *(modal)*
- Excluir um livro *(alerta)*
---
- Criar um autor *(modal)*
- Visualizar todos os autores *(tabela)*
- Visualizar um autor específico *(modal)*
- Excluir um autor *(alerta)*

## Regras

- Não é permitido utilizar *meta frameworks*, como **Next.js**, **Remix** e **TanStack Start**
- Não é permitido utilizar **Tailwind** ou **SASS**. Não é necessário.
- É obrigatório o uso da *ui library* **Ant Design** para lidar com visual e formulários.
- É obrigatório o uso da *date library* **Dayjs** para lidar com datas.
- É obrigatório o uso da ferramenta **Vite**
- É obrigatório o uso de **Docker**
- É permitido utilizar **React 19**, mas prefira usar funcionalidades do **React 18**. É como trabalhamos hoje.
- É obrigatório que os dados sejam armazenados no navegador por meio do **IndexedDB**. Recomenda-se fortemente o uso da biblioteca `localForage` para isso.

## Diferenciais

Os diferenciais são realmente diferenciais, então não se preocupe caso não entenda ou não consiga realizar algum deles.

**Lembre-se**: *O básico bem feito é melhor que o complicado mal feito.*

- **Zustand**
- **TanStack Query**
- **TypeScript**
- **JSDoc**
- **Storybook**
- **Vitest**
- **Turborepo**
- Trechos de código reutilizáveis, como funções e componentes
- Arquitetura bem definida (services, helpers, types, layout, routes)

## Mais dicas

 - Caso você não esteja confiante com **TypeScript**, pode ser legal dar uma olhada em **JSDoc**
 - Para estilização, você pode ler mais sobre como o tema do **Ant Design** funciona. Evite o uso de CSS muito customizados.
 - Para formulários, você pode ler mais sobre na documentação do **Ant Design**.
 - Você pode pedir para LLMs, como Gemini e Claude, te explicarem como usar o **Ant Design**. Não é algo errado usar como apoio, mas você deve entender o que está fazendo e enviando.
 - Lembre-se que autores e livros estão relacionados
 - Copiar e colar o seu próprio código não é um crime