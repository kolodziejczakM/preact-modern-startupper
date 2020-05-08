<div align="center">
    <img src="./src/assets/logo.png" width="250" height="250" alt="project logo" />
</div>

## Preact modern startupper

This is minimalistic boilerplate repository which goal is to boost productivity of small / middle size real world web projects and make new apps highly optimised.

Current bundle size (gzipped) is **19.4 KB**.

**You**: _Why should I care:question::question:_

-   easy to use boilerplate generators for components and modules
-   ready to use storybook support
-   side effects handling - through unistore - additional middlewares are not needed
-   store compatible with _Redux DevTools_
-   localisation support - you can easily start developing multiple-language app
-   pre-rendering support - you can render static HTML webpages out of app routes
-   battle-tested project structure - used in real world apps like [Passwords Fountain](https://github.com/kolodziejczakM/passwords-fountain)
-   great code editors support (check _Code editors support_ section to read more about recommended plugins)

If you can't stand that **19.4KB** I have good news. If you remove existing example modules & boilerplate you can end up with ~ **11KB** starter.

Not bad, right? :sunglasses:

<hr / >

### Installing project dependencies

`npm install`

### Development

Use `npm start` to run development server - it will be available at `localhost:8080`.

When developing component it is recommended to use Storybook (developing in isolation) instead of tinkering within actual app.
To run storybook server use: `npm run storybook`. It should show up at `localhost:6006`.

#### To create new component or module always use built-in generator :factory:

`npm run generate`

#### Example component can be found in:

-   `src/common/Button`

#### Example modules can be found in:

-   `src/modules/localisation`
-   `src/modules/counter`

#### What about utils?

We have place for them in `src/common/utils`.
Check out `src/common/utils/rendering.ts` it may be helpful during conditional rendering ;)

#### During development don't forget to check files listed below:

-   `src/common/theme.ts` - here we have all of our UI registries. This file helps a lot in maintaining app UI.
-   `src/@types` - we define types here if they haven't been provided by library creator. Unfortunately, TypeScript is still not everywhere ;(
-   `plopfile.js` - here you can see what is going to be generated after running `npm run generate`. All templates are inside `plop-templates` folder.
-   `src/modules/localisation/i18n.ts` - want do add new language support? Note: by default all translations are bundled alongside your app code, but you can always change that :)
-   `webpack.config.js` - bundler config. You shouldn't need to open it often, it's quite easy to go through it though.

### Running unit tests

If you want to run tests only once, use `npm test`.
You can also use test runner in watch mode by leveraging `npm run test:watch`.

### Commiting changes

After running `git commit` husky pre-commit hook will trigger:

1. TypeScript compiler - checking types
2. Linters - checking if rules weren't violated (Eslint + Stylelint)
3. Unit tests (Jest)

When something goes wrong you will get an error in your terminal so you can react accordingly.
After fixing all problems try committing your changes again.

### Getting into production

You probably won't need to run that often, but this will generate production version of your Front-end:

`npm run build`

<hr>

### Code editors support :computer:

This repo was tested both in WebStorm and VS Code.
To enhance your developer experience please install following plugins:

**WebStorm:**

-   ESLint
-   IntelliJ Stylelint Plugin
-   Styled Components & Style JSX
-   Rainbow Brackets

To unlock Stylelint for TypeScript files (CSS in JS):

`File -> Settings -> Languages & Frameworks -> Style Sheets -> Stylelint and mark "Process JS files"`.

To turn on formatting on save with Prettier:

`File -> Settings -> Tools -> File Watchers -> and add 3 Prettier watchers - ts, tsx and js files.`

**VS Code:**

-   ESLint
-   es6-string-css
-   stylelint
-   vscode-styled-components
-   vscode-styled-jsx
-   Prettier - Code formatter
-   TODO Highlight
-   Todo Tree
-   Bracket Pair Colorizer 2

To unlock formatting on save add with Prettier add these lines to your settings.json:

```
"editor.formatOnSave": true,
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

<hr>

## FAQ

### What about Redux DevTools support? :satellite:

It's supported. Each module uses unistore which is connected to Redux DevTools. Install proper extension to make use of it:
https://github.com/zalmoxisus/redux-devtools-extension

### What about app profilling? :chart_with_upwards_trend:

Preact-devtools extension does support profilling, you can install it from here:
https://github.com/preactjs/preact-devtools

### What about caching? :recycle:

There is simplest service worker setup via webpack OfflinePlugin - https://github.com/NekR/offline-plugin
If you don't want to use it, but you want simple cache on Front-end api calls, then it's better to use appropriate libraries, check out: https://github.com/elbywan/wretch

### What about eliminating duplicated requests, retrying them once fail...? :horse_racing:

Beyond scope of this project but check out: https://github.com/elbywan/wretch-middlewares

### What about lazy loading routes? :scissors:

Beyond scope of this project, but it's recommended to use https://github.com/prateekbh/preact-async-route or `lazy` via https://github.com/preactjs/preact-compat.

### What about normalizing data? :pencil:

Beyond scope of this project, it's recommended to use standard approaches though:
https://github.com/paularmstrong/normalizr

### Contact :mailbox:

Do not hestitate to ask questions I'm always willing to help - https://twitter.com/kolodziejczakMn
