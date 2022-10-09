# Eleventy Scripts Starter

An eleventy starter using only npx. Built with Sass and Vanilla Web Components.

## Contents

- [Get Started](#get-started)
- [Design Tokens](#design-tokens)
- [Creating Custom Elements](#create-custom-elements)
- [Creating Pages]

## Get Started

Since only `npx` is being used there is no need to `npm install` anything.
Before starting please reference the [Contributing Doc](/CONTRIBUTING.MD).

**Development**
`npm run dev`

**Production**
`npm run build`

Staged on Github Pages here: https://newmediaarts.github.io/nma_v4/

## Design Tokens

The design tokens are managed in the `tokens.json` file. You can update the file and run `npm run tokens`. It will parse the file and create SCSS variables and write them to the `src/scss/tokens.scss` file. NOTE: Everytime you run this command it will re-write the whole file. So don't update this file manually, instead manage all tokens in the json file.

## Create Custom Elements

1. Create the `template` tag markup for the element in `views/elements`
2. Create a file in `src/js/elements`. Remember to define the element on the bottom of the file. Prefix the element name with `nma` (example: if the filename is `text-stack.js` name the custom element: `nma-text-stack`)
3. Import the file into `src/js/main.js`

## Creating Pages

11ty uses file based routing, by creating a file in the `pages` folder with a certain name it will create a route for it.
There are some important properties that each page contains:

- `layout` - Will create the page using the file. For most cases set this to `base.njk`
- `page_title` (optional) - The value used in the `<title>` tag. (example: `page_title: Home` will create the meta title of `Home | NMA`)
- `partials` - This is a list that will accept multiple different partials. It is the building blocks for all the pages. Read more about [Building with partials](#building-with-partials).

## Building With Partials

These are the blocks to build your site with. This site uses a component based approach so image a partial as a individual re-usable piece that can be used throughout different pages.

Here are a couple of important files to know about:
`views/components/partials.njk` - Loops through all paritals and renders them to the pages
`views/partials/*.njk` - All files in this directory will be parsed and rendered by the `views/components/partials.njk` file.
`page/**/*.md` - All files in the `pages` directory have a `partials` list that multiple partials can be added to.

**NOTE: When building partials the `type` property is required and will be used to map to the correct file in the `views/partials` directory.
So if your partial `type` is `slideshow` you must also have a file in `views/partials/slideshow.njk`**

### Example

`page/index.md` - This will be the homepage

```yaml
partials:
 - type: single-column
    headline: Welcome to the homepage
    body: |
        <p>This is rendered using a web component. You can read more about it <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" aria-label="Learn more about web component on MDN">here</a></p>
```

`views/partials/single-column.njk` - Uses the keys from the `yaml` file to render diffent values

```jinja
<div class="{{partial.type}}">
  <nma-text-stack
    {% if partial.headline %}headline="{{partial.headline}}"{% endif %}
    {% if partial.body %}body="{{partial.body}}"{% endif %}
    ></nma-text-stack>
</div>
```
