import * as THREE from 'three';
import File from './File';

interface Options {
  columns: number,
  gap: number
}

class FileGroup {
  options:Options;
  group:THREE.Group = new THREE.Group();
  files:Array<File> = [];

  constructor(options?:Options) {
    this.options = {
      columns: 4,
      gap: 2.5
    }

    this.options = { ...this.options, ...options};
  }

  display = () => {
    let row = 0;
    let col = 0;
    if(this.files && this.files.length > 0) {
      this.files.forEach((file, index)=> {
        row = Math.floor(index/this.options.columns);
        col = index - (this.options.columns * row);

        const boundingBox = new THREE.Box3().setFromObject(file.block.mesh);
        const size = boundingBox.getSize(new THREE.Vector3);

        file.group.position.x = (size.x*this.options.gap) * col;
        file.group.position.z = (size.z*this.options.gap) * row;
        
        this.group.add(file.group);

        
      
      });
    }
  }

  add = (data: File | Array<File>) => {
    if(Array.isArray(data)) {
      this.files = [...(this.files),...(data)];
    } else {
      this.files.push(data);
    }
    this.display();
  }
}

export default FileGroup;