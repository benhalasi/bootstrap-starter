# bootstrap-starter
Lightweight HTML5 template preconfiguried with
1. [bootstrap](https://getbootstrap.com/ "bootstrap"), [scss](https://sass-lang.com/ "scss"), [ts](https://www.typescriptlang.org/ "ts")
2. [gulp](https://gulpjs.com/ "gulp"), [browser-sync](https://www.browsersync.io/ "browser-sync")
3. basic index.html template
You can *use this template* and start working on your site asap.
## Getting Started
### initilaize the project and its dependencies:
```bash
npm install --global gulp-cli
npm install
```
### start dev-server
this will compile every source file then rebuild and reaload the changes when they occure.
```bash
gulp
```
you can also use these aliases
```bash
gulp watch
npm watch
```
### build project w/out dev-server
this will build every source, but will not watch for changes.
```bash
gulp build
```
you can also use these aliases
```bash
gulp build
npm build
```
## Using Bootstrap
[index.html](https://github.com/b-o-mbie/bootstrap-starter/blob/master/docs/index.html "index.html") is preset with the neccessary libraries both js and css.
You can use bootstrap ([docs](https://getbootstrap.com/docs/4.5/components/alerts/ "components")) out of the box.
## Using Css and Js
[gulp is configured](https://github.com/b-o-mbie/bootstrap-starter/blob/master/gulpfile.js "gulp is configured") to compile every source file from [src](https://github.com/b-o-mbie/bootstrap-starter/tree/master/docs/src/scss "src") to [target](https://github.com/b-o-mbie/bootstrap-starter/tree/master/docs/target "target").
You should write your code into *src/scss/main.scss* and *src/ts/main.ts*. Gulp compiles and *index.html* imports them.
## Publishing
You can easily publish your site with [GitHub Pages](https://pages.github.com/ "GitHub Pages"), you may host from *docs/*.