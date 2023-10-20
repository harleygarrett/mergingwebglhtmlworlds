import * as THREE from 'three';

export default class Sketch {
  constructor(options) {
    this.time = 0;
    this.container = options.dom;
    this.scene = new THREE.Scene();

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 10);
    this.camera.position.z = 1; // closeness to canvas contents

    this.renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias improves rendering of edges
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    this.addObjects();
    this.render();
  }

  addObjects() { // create elements on canvas
    this.geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);
  }
  
  render() {
    this.time += 5; // speed of rotation
    
    this.mesh.rotation.x = this.time / 2000;
    this.mesh.rotation.y = this.time / 1000;

    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(this.render.bind(this))
  }
}

new Sketch({dom: document.getElementById('container')});