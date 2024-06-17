import * as THREE from 'three';
export{VENUS, venusSystem, rotateVenus, orbitVenus};

const TextureLoader = new THREE.TextureLoader();

const venusGeometry = new THREE.SphereGeometry(5,50,50)
const venusMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/venusmap.jpeg')});
const VENUS = new THREE.Mesh(venusGeometry, venusMaterial);
const venusSystem = new THREE.Object3D();

function rotateVenus(EARTHDAY){
    VENUS.rotation.y+= EARTHDAY;
}
function orbitVenus(EARTHYEAR){
    venusSystem.rotation.y += EARTHYEAR * 0.615;
}
