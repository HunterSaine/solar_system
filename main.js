import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

//create sun model
const geometry = new THREE.SphereGeometry(10,50,50)
const material = new THREE.MeshStandardMaterial({color:0xfdb813, wireframe:true})
const SUN = new THREE.Mesh(geometry,material);
scene.add(SUN);

//add ambient light to scense
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)

//adds grid to scene
const gridHelper = new THREE.GridHelper(200,50)
scene.add(gridHelper);

//adds controls to move around the scene
const controls = new OrbitControls( camera, renderer.domElement );

function rotateSun(){
  SUN.rotation.y +=.001;
}
//updates scene repeatedly
function animate(){
  requestAnimationFrame(animate);
  rotateSun();
  renderer.render(scene, camera);
}
animate()