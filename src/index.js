import "reset-css";
import * as THREE from "three";
import Nebula, { SpriteRenderer, Emitter,PointZone, Vector3D} from "three-nebula";
import getThreeApp from "./three-app";
import json from "./my-system.json";

var i=0;


function animate(nebula, app) {
  requestAnimationFrame(() => animate(nebula, app));

  var p =Math.PI;
  nebula.emitters[1].setPosition(new PointZone((Math.sin(i)*20), 0, 0));
  i+=0.1;

  nebula.update();
  app.renderer.render(app.scene, app.camera);
}

Nebula.fromJSONAsync(json.particleSystemState, THREE).then(loaded => {
  const app = getThreeApp();
  const nebulaRenderer = new SpriteRenderer(app.scene, THREE);
  
  const nebula = loaded.addRenderer(nebulaRenderer);
  
  animate(nebula, app);
});


