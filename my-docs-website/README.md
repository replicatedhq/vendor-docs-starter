# Welcome

This repository contains a sample documentation site for software vendors that distribute their application with [Replicated](https://docs.replicated.com). Vendors can use this sample site as a template for writing documentation for their application.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started with Docusaurus

### Requirement

Node.js version 18.0 or later. Check your version of Node.js by running `node -v`.

For the latest requirements, see [Installation](https://docusaurus.io/docs/installation) in the Docusaurus documentation.

### Install Docusaurus

```
yarn add docusaurus
```

### Run a Local Development Server

Start a local development server and view a preview of the site in a browser window. Most changes are reflected live without having to restart the server.

```
cd vendor-dos-starter
yarn start
```

### Build the Website

Generate static content into the `build` directory.

```
cd vendor-dos-starter
yarn build
```

## Using this Sample Site to Write Your Docs

1. Clone the repo locally.

1. Add, remove, and files in the `docs/` directory as needed.

1. Update the `sidebar.js` to add, remove, and relocate files in the sidbar that appears on the left side of the screen.

1. Add your content to the files using MDX v3, previewing your changes with a local development server.

1. 