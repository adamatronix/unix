import * as THREE from 'three';
import GenerateLabel from "./utils/GenerateLabel";

class FileLabel {
  label:GenerateLabel;
  mesh:THREE.Mesh;

  constructor(label:string) {
    this.label = new GenerateLabel(label);

    let material = new THREE.MeshBasicMaterial({color:0xFFFFFF,transparent: true});
    console.log(this.label.canvas);
    material.map = new THREE.CanvasTexture(this.label.canvas);
    let geometry = new THREE.PlaneGeometry(20,1.25);
    this.mesh = new THREE.Mesh(geometry,material);
    this.mesh.rotation.x = THREE.MathUtils.degToRad(-90);
  }
}

export default FileLabel;