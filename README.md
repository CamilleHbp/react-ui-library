# react-ui-library

This is a template repository to make a UI library using react, styled-components, typescript, webpack and storybook.

## Project configuration

### Planned

The build will be made by [webpack](https://webpack.js.org) because it is one of the most common build tools.
It can be massive and slow, so I will use [esbuild-loader](https://github.com/privatenumber/esbuild-loader), which uses [esbuild](https://esbuild.github.io) for the build or minification step.

### Typescript

The project compiles using TSC.

### Linting

This project uses [commitlint](https://commitlint.js.org) in conjunction with [husky](https://typicode.github.io/husky) for pre-commit validation.
The project also uses [eslint](https://eslint.org), [prettier](https://prettier.io) with [lint-staged](https://github.com/okonet/lint-staged) to lint and format the files before commit.
