# Eleventy Scripts Starter

An eleventy starter using only npx. Built with Sass and Vanilla Web Components.

## Get Started

Since only `npx` is being used there is no need to `npm install` anything

**Development**
`npm run dev`

**Production**
`npm run build`

## Create New Custom Elements

1. Create the `template` tag markup for the element in `views/elements`
2. Create a file in `src/js/elements`. Remember to define the element on the bottom of the file. Prefix the element name with `nma` (example: if the filename is `text-stack.js` name the custom element: `nma-text-stack`)
3. Import the file into `src/js/main.js`
