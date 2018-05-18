# Yuri's React/Redux/Immutable/Webpack Boilerplate

[![Build Status](https://travis-ci.org/ninjakttty/react-boilerplate.svg?branch=master)](https://travis-ci.org/ninjakttty/react-boilerplate)
[![Greenkeeper badge](https://badges.greenkeeper.io/ninjakttty/react-boilerplate.svg)](https://greenkeeper.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

## Installation

```
git clone --depth 1 git@github.com:ninjakttty/react-boilerplate.git <project name>
cd <project name>
rm -rf .git
git init
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
