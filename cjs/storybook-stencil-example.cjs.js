'use strict';

const core = require('./core-1bffab88.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-button.cjs",[[1,"my-button",{"label":[1]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
