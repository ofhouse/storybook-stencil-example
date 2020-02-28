import { a as patchEsm, b as bootstrapLazy } from './core-a6a7dce5.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["my-button", [[1, "my-button", { "label": [1] }]]], ["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
