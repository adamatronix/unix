import * as THREE from 'three';
import Block from './Block';

class File {
  block:Block;
  mesh: THREE.Mesh;

  constructor() {
    this.block = new Block(5,1,5, {color:0x4980b4});
    this.mesh = this.block.mesh;
  }
}

export default File;