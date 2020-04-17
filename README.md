<div align="center">
    <img width="250" height="250" src="https://camo.githubusercontent.com/8b1f23f4dba13c65120b5a7b3aa6c2201bcd25d6/68747470733a2f2f7261776769742e636f6d2f6f6f6164652f617765736f6d652d7072656163742f6d61737465722f7072656163742d6c6f676f2e737667" alt="Preact logo" />
</div>

<hr / >
## _Preact modern minimalistic_

This is minimalistic boilerplate repository which goal is to boost productivity of small / middle size web projects and make new apps highly optimised.

Current bundle size (gzipped) is **18.7 KB**.

**You**: _Why should I care:question::question:_

-   easy to use boilerplate generators for components and modules
-   ready to use storybook support
-   side effects handling - through unistore - additional middlewares are not needed
-   store compatible with *Redux DevTools*
-   localisation support - you can easily start developing multiple-language app
-   pre-rendering support - you can render static HTML webpages out of app routes
-   battle-tested project structure
-   great code editors support (check _Code editors support_ section to read more about recommended plugins)

If you can stand that **18.7KB** I have good news. If you remove existing example modules & boilerplate you can end up with ~ **11KB** starter.

Not bad, right? :sunglasses:

<hr / >

### To create new component or module always use built-in generator :factory:

`npm run generate`

### Example component can be found in:

-   `src/common/Button`

When developing component it is recommended to use Storybook instead of tinkering within actual app.
To run storybook server: `npm run storybook`

### Example modules can be found in:

-   `src/modules/localisation`
-   `src/modules/counter`

### What about utils?

We have place for them in `src/common/utils`.
Check out `src/common/utils/rendering.ts` it may be helpful during conditional rendering ;)

### Do not forget to check files listed below. They will be crucial during development:

-   `src/common/theme.ts` - here we have all of our UI registries. This file helps a lot in maintaining app UI.
-   `src/@types` - we define types here if they haven't been provided by library creator. Unfortunately, TypeScript is still not everywhere ;(
-   `plopfile.js` - here you can see what is going to be generated after running `npm run generate`. All templates are inside `plop-templates` folder.
-   `src/modules/localisation/i18n.ts` - want do add new language support? Note: by default all translations are bundled alongside your app code, but you can always change that :)
-   `webpack.config.js` - bundler config. You shouldn't need to open it often, it's quite easy to go through it though.

### What about Redux DevTools support? :satellite:

It's supported. Each module uses unistore which is connected to Redux DevTools. Just install proper extension:
https://github.com/zalmoxisus/redux-devtools-extension

### What about app profilling? :chart_with_upwards_trend:

preact-devtools extension does support profilling, just install it:
https://github.com/preactjs/preact-devtools

### What about caching? :recycle:

There is simplest service worker setup via webpack OfflinePlugin - https://github.com/NekR/offline-plugin
If you don't want to use it, but you want simple cache on Front-end api calls, then it's better to use appropriate libraries, check out: https://github.com/elbywan/wretch

### What about eliminating duplicated request, retrying them once fail...? :horse_racing:

Beyond scope of this project. Check out: https://github.com/elbywan/wretch-middlewares

### What about lazy loading routes? :scissors:

Beyond scope of this project.
Use https://github.com/prateekbh/preact-async-route or try `lazy` via https://github.com/preactjs/preact-compat.

### What about normalizing data? :pencil:

Beyond scope of this project, it's recommended to use standard approaches though:
https://github.com/paularmstrong/normalizr

### Code editors support :computer:

This repo was tested both in WebStorm and VS Code.
To enhance your developer experience please install following plugins:

**WebStorm:**

-   ESLint
-   IntelliJ Stylelint Plugin
-   Styled Components & Style JSX
-   Rainbow Brackets

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

### Contact :mailbox:

Do not hestitate to ask questions I'm always willing to help - https://twitter.com/kolodziejczakMn
