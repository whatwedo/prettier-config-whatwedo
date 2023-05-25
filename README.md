# Prettier Config whatwedo 

Those are our Prettier rules which we are using at [whatwedo](https://whatwedo.ch).

## Installation

Install our predefined config:

```
yarn add --dev whatwedo/prettier-config-whatwedo
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

Alternatively, setup Prettier in your project by adding a `prettier.config.js` file with the following content:

```
module.exports = {
    ...require('prettier-config-whatwedo')
};
```

## License

This bundle is under the MIT license. See the complete license in the bundle: [LICENSE](LICENSE)
