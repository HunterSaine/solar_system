import * as THREE from 'three';
export{SUN, SOLARSYSTEM, rotateSun};

const TextureLoader = new THREE.TextureLoader();

const geometry = new THREE.SphereGeometry(15,50,50)
const material = new THREE.MeshBasicMaterial({map: TextureLoader.load('./planets/textures/sunmap.jpeg')})
const SUN = new THREE.Mesh(geometry,material);

const SOLARSYSTEM = new THREE.Mesh(geometry, material);

function rotateSun(){
    SUN.rotation.y +=.005;
}