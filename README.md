# source_base_vue

## Project structure
`<pre>`
├───config
│       app-config.json // config for application
├───public
│       favicon.ico
│       index.html
└───src
    │   App.vue // component run application
    │   main.js // declare vue instance and add services
    │   
    ├───assets
    │   ├───css
    │   └───images // image storage in project
    ├───common
    │   ├───api // setup api for vuex dispath action
    │   │
    │   └───util // contains shared functions 
    │           
    ├───components // Stores generic components 
    │       
    ├───layouts // Store layout components 
    ├───locales // language file storage 
    │       en-US.json
    │       index.js
    │       vn.json
    ├───pages // Stores components for each page 
    ├───router // Store routing definitions 
    │       index.js
    │       router.js
    ├───scss // declare variable scss
    │       style.scss
    │       _defaults.scss
    │       _fonts.scss
    │       _global.scss
    │       _helpers.scss
    │       _medias.scss
    │       _mixins.scss
    │       _reset.scss
    │       _variables.scss
    │       
    └───store // use call API (composition API structure)
        │   index.js
        │   mutation-types.js
        │   
        └───modules
│   .editorconfig
│   .gitignore
│   babel.config.js
│   package-lock.json
│   package.json
│   vue.config.js
│   webpack.config.js
</pre>
## Project install
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lintfix
```

### copyright by ChienND
