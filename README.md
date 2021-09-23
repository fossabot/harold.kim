# harold.kim

harold.kim on Vue, design by stypr. MIT License (Clause 4).

Rebuilt to work in SSR. Commits before [ce4d3e34](https://github.com/stypr/harold.kim/commit/ce4d3e34bd119a3b07537d16cc7b40f1c63c3f43) are for SPA applicaitons.

The latest commit is run on production.

## Setup

`yarn install`

## Existing Bug

Remove `require()` from `node_modules/troisjs/build/trois.js` manually.

```
/*
var OrbitControls_js = require('three/examples/jsm/controls/OrbitControls.js');
var RectAreaLightUniformsLib_js = require('three/examples/jsm/lights/RectAreaLightUniformsLib.js');
var RectAreaLightHelper_js = require('three/examples/jsm/helpers/RectAreaLightHelper.js');
var GLTFLoader_js = require('three/examples/jsm/loaders/GLTFLoader.js');
var FBXLoader_js = require('three/examples/jsm/loaders/FBXLoader.js');
var EffectComposer_js = require('three/examples/jsm/postprocessing/EffectComposer.js');
var RenderPass_js = require('three/examples/jsm/postprocessing/RenderPass.js');
var BokehPass_js = require('three/examples/jsm/postprocessing/BokehPass.js');
var FilmPass_js = require('three/examples/jsm/postprocessing/FilmPass.js');
var ShaderPass_js = require('three/examples/jsm/postprocessing/ShaderPass.js');
var FXAAShader_js = require('three/examples/jsm/shaders/FXAAShader.js');
var HalftonePass_js = require('three/examples/jsm/postprocessing/HalftonePass.js');
var SMAAPass_js = require('three/examples/jsm/postprocessing/SMAAPass.js');
var SSAOPass_js = require('three/examples/jsm/postprocessing/SSAOPass.js');
var UnrealBloomPass_js = require('three/examples/jsm/postprocessing/UnrealBloomPass.js');
*/
```