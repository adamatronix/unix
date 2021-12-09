import * as THREE from 'three';

class World {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  constructor(scene:THREE.Scene, camera:any) {
    this.scene = scene;
    this.camera = camera;
    this.setupWorld();
    this.renderFrame();
  }

  setupWorld = () => {
    /**
     * Setup Renderer
     */
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    this.renderer.shadowMap.enabled = true;

    /**
     * Setup Light
     */
    //add lighting
    const skyColor = 0xFFFFFF;  // light blue
    const groundColor = 0xFFFFFF;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    light.position.set(0,200,0);
    this.scene.add(light);

    const pLight = new THREE.PointLight( 0xffffff, 0.8, 2000 );
    pLight.shadow.camera.near = 0.1;
    pLight.shadow.camera.far = 2000;
    pLight.shadow.mapSize.width = 1024;
    pLight.shadow.mapSize.height = 1024;
    pLight.position.set( 0, 1500, 0 );

    // remember to add the light to the scene
    this.scene.add( pLight );


    const planeGeometry = new THREE.PlaneGeometry( 2000, 2000 );
    const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000 } );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.rotation.x = THREE.MathUtils.degToRad(-90);
    this.scene.add( plane );   
  }

  renderFrame = () => {
    this.renderer.render( this.scene, this.camera );
    requestAnimationFrame(this.renderFrame);
  } 
}

export default World;