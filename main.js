import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import{SOLARSYSTEM, SUN, rotateSun} from './planets/sun.js'
import{EARTH, rotateEarth} from './planets/earth.js'
import{ambientLight, pointLight} from './light.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);
camera.position.setY(100);

renderer.render(scene,camera);

scene.add(SUN);
SUN.add(EARTH);
EARTH.position.x= 100;
scene.add(ambientLight);
scene.add(pointLight);

//adds grid to scene
const gridHelper = new THREE.GridHelper(1000,250)
scene.add(gridHelper);

//adds controls to move around the scene
const controls = new OrbitControls( camera, renderer.domElement );

//updates scene repeatedly
function animate(){
  requestAnimationFrame(animate);
  rotateSun();
  rotateEarth();
  renderer.render(scene, camera);
}
animate()