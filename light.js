import * as THREE from 'three';
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
const pointLight = new THREE.PointLight(0xffffff, 50000, 5000)
pointLight.position.set(20,20,20)
export{ambientLight, pointLight}