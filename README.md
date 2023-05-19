# Prettier Eslint Install.

#### `yarn add -D prettier eslint-plugin-prettier eslint-config-prettier`

## Config Prettier

- create file `.prettierrc` in root folder(src)
  #####copy:
  {
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
  }

## Config Eslint

- create file `.eslintrc` in root folder(src)
  #####copy:
  {
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
  "prettier/prettier": [
  "warn",
  {
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
  }
  ]
  }
  }

## Editor Config

- create file `.editorconfig` in root folder(src)

#####copy:
[*]
indent_size = 2
indent_style = space

## Tailwind css install

#### `yarn add tailwindcss postcss autoprefixer`

## Make tailwind config file

#### `npx tailwindcss init -p`

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{ts,tsx}"],
theme: {
extend: {},
},
plugins: [],
}

## Tailwind Prettier

#### `yarn add -D prettier-plugin-tailwindcss`

## Redux Toolkit

#### `yarn add @reduxjs/toolkit react-redux`

### `yarn start`
