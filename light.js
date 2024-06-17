import * as THREE from 'three';
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
const pointLight = new THREE.PointLight(0xffffff, 5, 5000, 0)
pointLight.position.set(0,0,0)
export{ambientLight, pointLight}