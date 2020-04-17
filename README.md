# Preact modern minimalistic

This is minimalisic boilerplate repository which goal is to boost productivity of small / middle size web projects and make new apps highly optimised.

Current bundle size (gzipped) is **18.7 KB**.

*You: Why should I care?*

- easy to use boilerplate generators for components, modules
- storybook support
- side effects handling (through unistore - additional middlewares not needed)
- Redux DevTools support
- localisation support (you can easily start developing multiple-languages app)
- pre-rendering support (you can produce static HTML webpages out of app routes )

- battle-tested project structure

If you can stand that **18.7KB** I have good news. If you remove existing example modules & boilerplate you can end up with ~ **11KB** starter.
Not bad, right?

### To create new component or module always use built-in generator:

`npm run generate`

### Example component can be found in:

-   `src/common/Button`

When developing component it is recommended to use Storybook instead of tinkering in actual app.
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
-   `src/modules/localisation/i18n.ts` - want do add new language support? Note: default all translations are bundled alongside your app code, but you can always changed that :)
-   `webpack.config.js` - bundler config. You shouldn't need to open it often, it's quite easy to go through it though.

### What about Redux DevTools support?

It's supported. Each module uses unistore which is connected to Redux DevTools. Just install proper extension:
https://github.com/zalmoxisus/redux-devtools-extension

### What about app profilling?

preact-devtools extension does support profilling, just install it:
https://github.com/preactjs/preact-devtools

### What about caching?

There is simplest service worker setup via webpack OfflinePlugin - https://github.com/NekR/offline-plugin
If you don't want to use it, but you want simple cache on Front-end api calls, then it's better to use appropriate libraries, check out: https://github.com/elbywan/wretch

### What about eliminating duplicated request, retrying them once fail...?

Beyond scope of this project. Check out: https://github.com/elbywan/wretch-middlewares


### What about lazy loading routes?

Beyond scope of this project.
Use https://github.com/prateekbh/preact-async-route or try `lazy` via https://github.com/preactjs/preact-compat.

### What about normalizing data?

Beyond scope of this project, it's recommended to use standard approaches though:
https://github.com/paularmstrong/normalizr

### Contact
Do not hestitate to ask questions I'm always willing to help - https://twitter.com/kolodziejczakMn
