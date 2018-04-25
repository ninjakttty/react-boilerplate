# Yuri's React/Redux/Immutable/Webpack Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/ninjakttty/react-boilerplate.svg)](https://greenkeeper.io/)

## Installation

```
git clone git@github.com:ninjakttty/react-boilerplate.git
npm install
```

## NPM Scripts

* start -- start in dev mode
* dev -- same as above
* build -- build production dist folder
* test -- run tests
* eject -- eject from react boilerplate

## Directory Structure

```
src
|-- Routes.js
|-- index.js
|-- store.js
|-- components // components used in pages
|-- css //static css
|-- pages //top level pages go here, this is what you link routes to
|-- redux
    |-- configureStore.js // this sets up the store you probably dont need to be in here
    |-- rootReducer.js // this is where you add new stores
    |-- auth  // store directory contains actions / reducers
    |   |-- actions.js
    |   |-- constant.js
    |   |-- reducer.js
```

## License

MIT
