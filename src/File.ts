import * as THREE from 'three';
import Block from './Block';
import FileLabel from './FileLabel';

class File {
  group:THREE.Group;

  constructor(name:string) {
    this.group = new THREE.Group();

    const block = new Block(5,1,5, {color:0x4980b4});
    this.group.add(block.mesh);

    console.log(block.mesh.position);
    const label = new FileLabel(name);
    label.mesh.position.set(block.mesh.position.x, block.mesh.position.y, block.mesh.position.z + 4);
    this.group.add(label.mesh);
    
  }
}

export default File;