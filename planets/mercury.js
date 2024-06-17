import * as THREE from 'three';
import {MOON} from './moon';
export{MERCURY,mercurySystem, rotateMercury, orbitMercury};

const TextureLoader = new THREE.TextureLoader();

const mercuryGeometry = new THREE.SphereGeometry(3,50,50)
const mercuryMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/mercurymap.webp')});
const MERCURY = new THREE.Mesh(mercuryGeometry,mercuryMaterial);
const mercurySystem = new THREE.Object3D();

function rotateMercury(EARTHDAY){
    MERCURY.rotation.y += EARTHDAY / 59;
}
function orbitMercury(EARTHYEAR){
    mercurySystem.rotation.y += EARTHYEAR * 4.15;
}