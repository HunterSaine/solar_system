import * as THREE from 'three';
export { SATURN, saturnSystem, rotateSaturn, orbitSaturn };

const TextureLoader = new THREE.TextureLoader();

const Geometry = new THREE.SphereGeometry(10, 50, 50)
const Material = new THREE.MeshStandardMaterial({ map: TextureLoader.load('/textures/saturnmap.jpg') });
const SATURN = new THREE.Mesh(Geometry,Material);
const saturnSystem = new THREE.Object3D();

function rotateSaturn(EARTHDAY) {
    SATURN.rotation.y += EARTHDAY / 5;
}
function orbitSaturn(EARTHYEAR) {
    saturnSystem.rotation.y += EARTHYEAR / 1.3};