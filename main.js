import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import{SUN, rotateSun} from './sun.js'
import{EARTH, rotateEarth} from './earth.js'
import{ambientLight} from './light.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(30);

renderer.render(scene,camera);

scene.add(SUN,EARTH);
EARTH.position.x= 50;
scene.add(ambientLight)

//adds grid to scene
const gridHelper = new THREE.GridHelper(200,50)
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