# Eleventy Scripts Starter

An eleventy starter using only npx. Built with Sass and Vanilla Web Components.

## Contents

- [Get Started](#get-started)
- [Creating Custom Elements](#create-custom-elements)

## Get Started

Since only `npx` is being used there is no need to `npm install` anything.
Before starting please reference the [Contributing Doc](/CONTRIBUTING.MD).

**Development**
`npm run dev`

**Production**
`npm run build`

Staged on Github Pages here: https://newmediaarts.github.io/nma_v4/

## Create Custom Elements

1. Create the `template` tag markup for the element in `views/elements`
2. Create a file in `src/js/elements`. Remember to define the element on the bottom of the file. Prefix the element name with `nma` (example: if the filename is `text-stack.js` name the custom element: `nma-text-stack`)
3. Import the file into `src/js/main.js`
