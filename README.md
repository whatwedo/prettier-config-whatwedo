# Prettier Config whatwedo 

These are our Prettier rules which we are using at [whatwedo](https://whatwedo.ch).

## Installation

Install our predefined config:

```
npm install whatwedo/prettier-config-whatwedo --save-dev
```

Add Prettier directly to the `package.json` in a simple way:

```
"name": "sample-project",
...    
"prettier": "prettier-config-whatwedo",
"dependencies": {
    ...
}
```

Alternatively, if you need to override the config setup Prettier in your project by adding a `prettier.config.js` file with the following content:

```
module.exports = {
    ...require('prettier-config-whatwedo')
    YOUR CUSTOM OVERWRITES
};
```

More information about how to extend the config here: https://prettier.io/docs/en/configuration.html#sharing-configurations

## Command

To run Prettier manually via NPM or a pre commit hook add a `script` attribute to the `package.json`:

```
"scripts": {
    "prettier": "prettier --write PROJECT_PATH/**/*.{js,tsx,ts,css,scss,sass,json,yml}",
}
```

Hint: Maybe you have to specify the config in the command depending on your setup: `--config prettier.config.js`


Afterwards you can run it easily on the command line via `npm run prettier`.

## Editor integration

Make sure to integrate Prettier in your editor of preference automatically. Meaing that on every save of a file the code is automatically formated and you don't have to worry about anything.

Check the documentation of Prettier: https://prettier.io/docs/en/editors

## License

This bundle is under the MIT license. See the complete license in the bundle: [LICENSE](LICENSE)
