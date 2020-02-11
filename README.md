# electron-react-boilerplate

## Getting Started!

```
// Install and run React & Electron.

yarn
yarn dev

// Test the application.

yarn build
yarn testcafe

// Make an executable.

yarn build
yarn electron-builder
```

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
