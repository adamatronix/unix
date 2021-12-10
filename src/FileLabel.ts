import * as THREE from 'three';
import GenerateLabel from "./utils/GenerateLabel";

interface LooseObject {
  [key: string]: any
}

class FileLabel {
  label:GenerateLabel;
  mesh:THREE.Mesh;
  options:LooseObject;

  constructor(label:string, options?:LooseObject) {
    this.options = {
      color: 0x00ff00,
    }

    this.options = { ...this.options, ...options};
    this.label = new GenerateLabel(label);

    let material = new THREE.MeshBasicMaterial({color:0xFFFFFF,transparent: true});
    material.map = new THREE.CanvasTexture(this.label.canvas);
    let geometry = new THREE.PlaneGeometry(20,1.25);
    this.mesh = new THREE.Mesh(geometry,material);
    this.mesh.rotation.x = THREE.MathUtils.degToRad(-45);
  }
}

export default FileLabel;