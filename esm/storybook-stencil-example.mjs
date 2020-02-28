import { p as patchBrowser, b as bootstrapLazy } from './core-a6a7dce5.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-button",[[1,"my-button",{"label":[1]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
