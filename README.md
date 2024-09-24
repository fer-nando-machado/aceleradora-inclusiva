# aceleradora-inclusiva

![Aceleradora Inclusiva](/public/inclusiva-logo.png "Aceleradora Inclusiva")

Showcase de projetos web produzidos pelas turmas da **Aceleradora Inclusiva**. Imagens: [pexels.com](https://www.pexels.com/)

## Arquitetura

O gerenciamento dos projetos que serão exibidos no site é feito através de arquivos contidos nas pastas `public` e `src`.

### public

Este diretório contém os arquivos estáticos que serão acessados pela aplicação em tempo de execução. A pasta `pages` deve ser atualizada com arquivos `.html`, `.css` e `.js` produzidos pelos estudantes.

### src

O arquivo `pages.json` deve refletir a estrutura de pastas contida em `public/pages`, além de dados como título, descrição e imagem de exibição de cada projeto.

## Commands

In the project directory, you can run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production on the `build` folder.

### `npm run preview`

Runs the `build` in preview mode.

### `npm run deploy`

Publishes the `build` to GitHub Pages using [gh-pages](https://github.com/tschaub/gh-pages).
