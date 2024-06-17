import * as THREE from 'three';
import { texture } from 'three/examples/jsm/nodes/Nodes.js';
export{SUN, SOLARSYSTEM, rotateSun}

const TextureLoader = new THREE.TextureLoader();

const geometry = new THREE.SphereGeometry(10,50,50)
const material = new THREE.MeshStandardMaterial({map: TextureLoader.load('./textures/sunmap.jpg')})
const SUN = new THREE.Mesh(geometry,material);

const SOLARSYSTEM = new THREE.Mesh(geometry, material);

function rotateSun(){
    SUN.rotation.y +=.001;
}