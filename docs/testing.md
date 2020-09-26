---
id: testing.md
title: Testing
sidebar_label: Testing
slug: /testing
---

Testing in munster uses [karma](https://karma-runner.github.io/latest/index.html) and [munster-tester](https://npmjs.com) package.

## Setup testing environment

Testing environment can be setup using [munster-cli](/docs/cli-installation) or manually installing all the dependencies.

To install all the dependencies just follow the steps below:

## Install dependencies

Install the following dependencies in your current project as a development dependencies using the following command.

```bash
npm install --save-dev munster-tester karma karma-jasmine karma-parcel karma-babel-preprocessor karma-chrome-launcher
```