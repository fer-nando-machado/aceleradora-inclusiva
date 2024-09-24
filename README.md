# aceleradora-inclusiva

![Aceleradora Inclusiva](/public/inclusiva-logo.png "Aceleradora Inclusiva")

Showcase de projetos web produzidos pelas turmas da **Aceleradora Inclusiva**

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

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

Imagens: [pexels.com](https://www.pexels.com/)
