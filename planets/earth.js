import * as THREE from 'three';
import {MOON} from './moon';
export{EARTH, earthSystem, rotateEarth, orbitEarth};

const TextureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(5,50,50)
const earthMaterial = new THREE.MeshStandardMaterial({map: TextureLoader.load('./planets/textures/earthmap.jpeg')});
const EARTH = new THREE.Mesh(earthGeometry,earthMaterial);
const earthSystem = new THREE.Object3D();

//EARTH.add(moonSystem);
//MOON.position.x = 10
function rotateEarth(EARTHYEAR){
    EARTH.rotation.y += EARTHYEAR;
}
function orbitEarth(EARTHYEAR){
    earthSystem.rotation.y += EARTHYEAR;
}