# Welcom to the NMA contributing guide

Thanks for taking the time to work on the project! Here's an overview on the contributions workflow from creating issues, code reviews and merging a PR.

# Table of Contents

- [Git Workflow](#git-workflow)
- [VSCode](#vs-code)

## Git Workflow

### Creating a new feature branch

1. Before creating a new branch make sure that you are on `main` and run `git pull --rebase origin main`
2. Run `git checkout -b <feature-branch-name>`
3. Commit often captialize the first letter of your commit message (example: `Remove extra div`)
4. Push up your branch (`git push --set-upstream origin <feature-branch-name>`) and create a PR. Write a short description of what your branch does and request `frzrbox`or`kccnma` as reviewers
5. Once your branch gets approved checkout into `main` (`git checkout main`) and pull again `git pull --rebase origin main`
6. After the main branch is up to date again, checkout to your feature branch (`git checkout -b <feature-branch-name>`) and run `git merge main`
7. If there are conflicts then resolve them, if not push up your branch and then merge the PR.

## VS Code

If you are using VSCode you can install the following plugins to help with the developer experience

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)
- [Nunjucks Snippets](https://marketplace.visualstudio.com/items?itemName=luwenjiechn.nunjucks-vscode-snippets)
- [Nunjucks Template Formatter](https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [JS Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

Adding the following to the editors `settings.json` file will enable formatting

```json
  "editor.formatOnSave": true,
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[nunjucks]": {
    "editor.defaultFormatter": "okitavera.vscode-nunjucks-formatter"
  }
```
