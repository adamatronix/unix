
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import World from './World';
import Block from './Block';

class Desktop {
  world:World;

  constructor() {
    this.world = new World(new THREE.Scene(), new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 5000));
    this.world.scene.background = new THREE.Color(0xcccccc);

    this.world.camera.position.set(10, 10, 10);
    this.world.camera.lookAt(new THREE.Vector3(0,0,0));

    let controls = new OrbitControls( this.world.camera, this.world.renderer.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 500;

    let block = new Block(5,1,5, { color: 0x007F99 });
    this.world.scene.add(block.mesh);

  }
}

export default Desktop;