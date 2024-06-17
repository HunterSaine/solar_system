import * as THREE from 'three';
export{EARTH, rotateEarth};

const TextureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(5,50,50)
const earthMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/earthmap.jpeg')});
const EARTH = new THREE.Mesh(earthGeometry,earthMaterial);

function rotateEarth(){
    EARTH.rotation.y += .005;
}