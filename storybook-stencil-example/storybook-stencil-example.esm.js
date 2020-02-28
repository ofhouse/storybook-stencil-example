import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-3c93baab.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-button",[[1,"my-button",{"label":[1]},[[0,"click","onClickHandler"]]]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
