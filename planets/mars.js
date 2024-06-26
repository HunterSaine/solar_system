import * as THREE from 'three';
export { MARS, marsSystem, rotateMars, orbitMars };

const TextureLoader = new THREE.TextureLoader();

const marsGeometry = new THREE.SphereGeometry(5, 50, 50)
const marsMaterial = new THREE.MeshStandardMaterial({ map: TextureLoader.load('/textures/marsmap.jpeg') });
const MARS = new THREE.Mesh(marsGeometry, marsMaterial);
const marsSystem = new THREE.Object3D();

function rotateMars(EARTHDAY) {
    MARS.rotation.y += EARTHDAY;
}
function orbitMars(EARTHYEAR) {
    marsSystem.rotation.y += EARTHYEAR / 1.88;
}
