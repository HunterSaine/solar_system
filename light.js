import * as THREE from 'three';
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
const pointLight = new THREE.PointLight(0xffffff, 1000)
pointLight.position.set(20,20,20)
export{ambientLight, pointLight}