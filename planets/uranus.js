import * as THREE from 'three';
export { URANUS, uranusSystem, rotateUranus, orbitUranus };

const TextureLoader = new THREE.TextureLoader();

const Geometry = new THREE.SphereGeometry(10, 50, 50)
const Material = new THREE.MeshStandardMaterial({ map: TextureLoader.load('/textures/uranusmap.jpeg') });
const URANUS = new THREE.Mesh(Geometry,Material);
const uranusSystem = new THREE.Object3D();

function rotateUranus(EARTHDAY) {
    URANUS.rotation.y += EARTHDAY / 5;
}
function orbitUranus(EARTHYEAR) {
    uranusSystem.rotation.y += EARTHYEAR / 1.3} 
    