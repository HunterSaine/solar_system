import * as THREE from 'three';
export{SUN, rotateSun}

const geometry = new THREE.SphereGeometry(10,50,50)
const material = new THREE.MeshStandardMaterial({color:0xfdb813, wireframe:true})
const SUN = new THREE.Mesh(geometry,material);

function rotateSun(){
    SUN.rotation.y +=.001;
}