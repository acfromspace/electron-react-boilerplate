# electron-react-boilerplate

## Getting Started!

```
// Install and run React & Electron.

yarn
yarn start
yarn e-start

// Test the application.

yarn e-test

// Build the application then create an executable.

yarn build
yarn e-build
run the .exe within the dist/ folder
```

<!-- ## Documentation

- Documentation.js: `firefox docs/index.html`
- JSDocs: `firefox out/index.html`
- JSDocs Docdash: `firefox out-2/index.html`

### document.js

```bash
sudo npm install -g documentation
documentation build functions/** -f html -o docs
firefox docs/index.html
```

### JSDocs Default

```bash
sudo npm install -g jsdoc
jsdoc functions/**
firefox out/index.html
```

### JSDocs Docdash

```bash
npm install --save-dev docdash
```

```js
// package.json
"script": {
  "generate-docs": "node_modules/.bin/jsdoc -c jsdoc.json"
}

// jsdoc.json
{
    "opts": {
    "template": "node_modules/docdash"
    }
}
```

```bash
npm run generate-docs functions/**
firefox out/index.html
``` -->

## Errors & Fixes

"Error: ENOSPC: System limit for number of file watchers reached, watch".

- Problem arises on Linux. It's not uncommon to encounter a system limit on number of files you can monitor.

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

## Notes

`public/electron.js` > `src/electron.js` due to how `React.js` uses `npm build` to put `electron.js` as a file in the `build` folder due to how it's built.

`description` and `author` warnings show up due to `electron-builder` library.
