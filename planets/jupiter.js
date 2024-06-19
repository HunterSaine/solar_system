import * as THREE from 'three';
export { JUPITER, rotateJupiter,jupiterSystem,orbitJupiter};

const TextureLoader = new THREE.TextureLoader();

const jupiterGeometry = new THREE.SphereGeometry(12, 50, 50)
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: TextureLoader.load('/textures/jupitermap.jpeg') });
const JUPITER = new THREE.Mesh(jupiterGeometry,jupiterMaterial);
const jupiterSystem = new THREE.Object3D();

function rotateJupiter(EARTHDAY) {
    JUPITER.rotation.y += EARTHDAY / 10;
}
function orbitJupiter(EARTHYEAR) {
    jupiterSystem.rotation.y += EARTHYEAR / 1.88};