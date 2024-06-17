import * as THREE from 'three';
export{EARTH, rotateEarth};

const TextureLoader = new THREE.TextureLoader();

const geometry = new THREE.SphereGeometry(2,50,50)
const material = new THREE.MeshStandardMaterial({map: TextureLoader.load('../earthmap.jpeg')});
const EARTH = new THREE.Mesh(geometry,material);

function rotateEarth(){
    EARTH.rotation.y += .005;
}