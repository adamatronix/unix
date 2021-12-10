import * as THREE from 'three';
import Block from './Block';
import FileLabel from './FileLabel';

class File {
  group:THREE.Group;
  block:Block;

  constructor(name:string) {
    this.group = new THREE.Group();

    this.block = new Block(5,1,5, {color:0x4980b4});
    this.group.add(this.block.mesh);

    const label = new FileLabel(name, { color: 0xFFFFFF});
    label.mesh.position.set(this.block.mesh.position.x, 0.5, this.block.mesh.position.z + 3.5);
    this.group.add(label.mesh);
    
  }
}

export default File;