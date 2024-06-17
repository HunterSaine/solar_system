import * as THREE from 'three';
import {MOON} from './moon';
export{MERCURY, rotateMercury};

const TextureLoader = new THREE.TextureLoader();

const mercuryGeometry = new THREE.SphereGeometry(3,50,50)
const mercuryMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/mercurymap.webp')});
const MERCURY = new THREE.Mesh(mercuryGeometry,mercuryMaterial);
function rotateMercury(){
    MERCURY.rotation.y += .01;
}