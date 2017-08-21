"use strict";

var type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type);

//Create the renderer
var renderer = PIXI.autoDetectRenderer(400, 600);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

renderer.view.style.border = "1px dashed black";

var TextureCache = PIXI.utils.TextureCache;
var PResources = PIXI.loader.resources;
var PSprite = PIXI.Sprite;

PIXI.loader.add("pics/yellow.jpg").add("pics/green.jpg").load(game);
