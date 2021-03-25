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
