import * as THREE from 'three';
export{EARTH, rotateEarth}

const geometry = new THREE.SphereGeometry(2,50,50)
const material = new THREE.MeshStandardMaterial({color:0xfdb813, wireframe:true})
const EARTH = new THREE.Mesh(geometry,material);

function rotateEarth(){
    EARTH.rotation.y +=100;
}