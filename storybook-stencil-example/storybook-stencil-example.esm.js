import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-a7ceb129.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
