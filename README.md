# Neha Niphadkar

[![GitHub Pages](https://github.com/niphadkarneha/niphadkarneha.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/niphadkarneha/niphadkarneha.github.io/actions/workflows/pages.yml)

Personal website of Neha Niphadkar, Director of Analytics and Reporting at Old Dominion University. The site includes research on data governance and responsible AI, academic engagement, writing, and CV highlights.

[Visit the website](https://niphadkarneha.github.io/)

## Run locally

Use Node.js 22. Install the locked dependencies and start the development server:

```sh
npm ci --legacy-peer-deps
NODE_OPTIONS=--openssl-legacy-provider npm start
```

In PowerShell, set `$env:NODE_OPTIONS = '--openssl-legacy-provider'` before running `npm start`.

## Publish

The site is hosted on GitHub Pages. To publish changes, open **Actions → GitHub Pages → Run workflow** and select the default branch (`github-pages-migration`). The workflow builds the React site and publishes the output.
