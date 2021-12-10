import * as THREE from 'three';
import GenerateLabel from "./utils/GenerateLabel";

class FileLabel {
  label:GenerateLabel;
  mesh:THREE.Mesh;

  constructor(label:string) {
    this.label = new GenerateLabel(label);

    let material = new THREE.MeshBasicMaterial();
    material.map = new THREE.CanvasTexture(this.label.canvas);

    let geometry = new THREE.PlaneGeometry(10,4);
    this.mesh = new THREE.Mesh(geometry,material);
  }
}

export default FileLabel;