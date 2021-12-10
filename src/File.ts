import * as THREE from 'three';
import Block from './Block';
import FileLabel from './FileLabel';

class File {
  block:Block;
  mesh: THREE.Mesh;

  constructor(name:string) {
    this.block = new Block(5,1,5, {color:0x4980b4});
    this.mesh = this.block.mesh;

    new FileLabel(name);
  }
}

export default File;