import * as THREE from 'three';
export{MOON};

const TextureLoader = new THREE.TextureLoader();

const moonGeometry = new THREE.SphereGeometry(1,50,50)
const moonMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/moonmap.jpeg')});
const MOON = new THREE.Mesh(moonGeometry, moonMaterial);
