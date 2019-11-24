# meetingroom vue frontend

## Project setup
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

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ------------------------------------------------------
# My Readme

- Release: v0.01 (on progress) 
  - Important Detail: Cors, Refactoring Router, API, etc...
  - Viewable        : Home, Register, Login and Equipment
  - In Progress     : Equipment
  - Fixing Issue    : Docker for deploy + Cors Allow
  - Next, Goals     : Complete all main view 

- API
  - For testing: I use Axios with proxy config in  vue.config.js, So I can shorten API url called and dynamic change host of API  
  - For production: I created API module in services/  for easier readable, understanding, grouping, tracing and more flexible using with dynamic changing url on demand or config flag.  
  - # NOW: I use instance API instead of default common of axios for store separate SESSION when calling with backend api. (NEED TO CHECK API INSTANCE BEFORE USING)

- Dependencies
  - axios
  - jquery
  - bootstrap
  - font-awesome
  - vee-validate (v2.x)

- "Invalid Host header" Issue
  - Edit vue.config.js --> disableHostCheck: true
  - vue.config.js --> API proxy
