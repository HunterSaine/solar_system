import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import{SUN, rotateSun} from './planets/sun.js'
import{EARTH, earthSystem, rotateEarth, orbitEarth} from './planets/earth.js'
import{ambientLight, pointLight} from './light.js'
import { MERCURY, rotateMercury, orbitMercury, mercurySystem} from './planets/mercury.js';
import { VENUS, orbitVenus, rotateVenus } from './planets/venus.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(120);
camera.position.setY(150);

renderer.render(scene,camera);

scene.add(SUN, earthSystem, mercurySystem);
SUN.add(MERCURY);
earthSystem.add(EARTH);
EARTH.add(moonSystem);
moonSystem.add(MOON);
mercurySystem.add(MERCURY);

//positions
MERCURY.position.x=50;
EARTH.position.x= 130;
MOON.position.x=10;



scene.add(ambientLight);
scene.add(pointLight);

//adds grid to scene
//const gridHelper = new THREE.GridHelper(1000,250)
//scene.add(gridHelper);

//adds controls to move around the scene
const controls = new OrbitControls( camera, renderer.domElement );

const EARTHYEAR = (2 * Math.PI * (1/60) * (1/60))/2;
const EARTHDAY = (EARTHYEAR * 365)/2; 
function animate(){
  requestAnimationFrame(animate);
  //rotateSun();
  //eart orbits the sun one cycle per minute
  orbitEarth(EARTHYEAR);
  rotateEarth(EARTHDAY);
  orbitMercury(EARTHYEAR);
  rotateMercury(EARTHYEAR);
  rotateMoon(.000000002);
  renderer.render(scene, camera);
}
animate()