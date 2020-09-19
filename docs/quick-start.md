---
id: quick-start.md
title: Quick start
sidebar_label: Quick start
slug: /quick-start
---

There are many ways to setup a munster project.
One way is to use the [CLI](cli-installation.md) but the easiest way is to clone the starter app from [GitHub](https://github.com/mfpjayb/munster-starter-app).

## Create an app

Clone the starter app from [GitHub](https://github.com/mfpjayb/munster-starter-app).

```bash
git clone https://github.com/mfpjayb/munster-starter-app.git munster-app
```
After cloning the repository, change directory into the starter project

```bash
cd munster-app
```

then install the dependencies

```bash
npm install
```
Start the local development server by running the following command:

```bash
npm start
```
You can preview your site in your browser on `http://localhost:4000`

## Project structure

After the setup is complete, you can see the file structure of project in the current directory.

```
index.html
└── src/
    ├── main.js
    ├── AppRoot.js
    └── assets/
node_modules/
package.json
```
* `index.html` as the main HTML page that is served when someone visits the site.
* `src/AppRoot.js` the root component. Any other components must be a child of this component.
* `src/main.js` the main entry point of your application. It bootstrap the root module of the entire project.
* `src/assets` this is the recommended directory to put all of the asset files.
* `package.json` list all the dependencies and configurations of your project.
* `node_modules/` this is where the installed node packages are located.

