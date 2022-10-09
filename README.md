# Eleventy Scripts Starter

An eleventy starter using only npx. Built with Sass and Vanilla Web Components.

## Contents

- [Get Started](#get-started)
- [Design Tokens](#design-tokens)
- [Creating Custom Elements](#create-custom-elements)

## Get Started

Since only `npx` is being used there is no need to `npm install` anything.
Before starting please reference the [Contributing Doc](/CONTRIBUTING.MD).

**Development**
`npm run dev`

**Production**
`npm run build`

Staged on Github Pages here: https://newmediaarts.github.io/nma_v4/

# Design Tokens

The design tokens are managed in the `tokens.json` file. You can update the file and run `npm run tokens`. It will parse the file and create SCSS variables and write them to the `src/scss/tokens.scss` file. NOTE: Everytime you run this command it will re-write the whole file. So don't update this file manually, instead manage all tokens in the json file.

## Create Custom Elements

1. Create the `template` tag markup for the element in `views/elements`
2. Create a file in `src/js/elements`. Remember to define the element on the bottom of the file. Prefix the element name with `nma` (example: if the filename is `text-stack.js` name the custom element: `nma-text-stack`)
3. Import the file into `src/js/main.js`
