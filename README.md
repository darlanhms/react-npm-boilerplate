# React NPM boilerplate
### simple boilerplate to publish npm packages with react components

the idea when publishing the package is having an `index` at the project root that will export all the components so you will import everything as 

`import { ComponentName } from '<package name>'`

but you'll also have the option to import directly from the component folder as

`import ComponentName from '<package name>/ComponentName'`

to make it happen you'll have to do the following steps:

* run `(yarn|npm run) build`
* run `npm pack ./lib`
* run `npm publish ./<package name>-<package-verion>.tgz` (this file will be auto generated from the previous step)

#### In order to use your components locally to test it in another project, do the following steps

In your package root:

* run `(yarn|npm run) build`
* run `cd lib`
* run `npm link`

In your other project folder:

* run `npm link <package name>`

It will automatically add your package to the project's `node_modules`, so now you can do your imports as

`import { ComponentName } from '<package name>'` or `import ComponentName from '<package name>/ComponentName'`

Note that you can do this WITHOUT having the package in the project's package.json, and if you build your package it will already change everything on the other project node_modules (if your server is open, it will hot reload), so you don't have to care about linking anymore

For more informations about `npm link` [click here](https://docs.npmjs.com/cli/v7/commands/npm-link)


