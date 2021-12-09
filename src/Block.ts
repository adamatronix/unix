import * as THREE from 'three';

interface LooseObject {
  [key: string]: any
}

class Block {
  options: any;
  mesh: THREE.Mesh;

  constructor(width:number, height:number, depth:number, options?: LooseObject) {
    this.options = {
      color: 0x00ff00,
    }

    this.options = { ...this.options, ...options};

    let geometry = new THREE.BoxGeometry( width, height, depth );
    let material = new THREE.MeshPhongMaterial( { color: this.options.color } );
    
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.position.y = height/2;
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }
}

export default Block;