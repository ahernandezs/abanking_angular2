# abanking_alpha

This repository holds the Angular2/TypeScript source code of the new abanking SPA template,
the following are the instructions to make it run in your local environment.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Prerequisites

Node.js and npm are essential to Angular 2 development.

**Verify that you are running node `v6.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

In addition to node/npm you must install the angular-cli:

```bash
npm install -g angular-cli
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
ng serve
```

The `ng serve` command compiles, runs the application and watch for file changes. Navigate to `http://localhost:4200/`.

Shut it down manually with Ctrl-C.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
