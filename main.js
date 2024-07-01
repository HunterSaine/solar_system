import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SUN, rotateSun } from './planets/sun.js'
import { EARTH, earthSystem, rotateEarth, orbitEarth } from './planets/earth.js'
import { ambientLight, pointLight } from './light.js'
import { MERCURY, rotateMercury, orbitMercury, mercurySystem } from './planets/mercury.js';
import { VENUS, venusSystem, orbitVenus, rotateVenus } from './planets/venus.js';
import { MARS, marsSystem, orbitMars, rotateMars } from './planets/mars.js';
import { JUPITER,jupiterSystem,orbitJupiter,rotateJupiter } from './planets/jupiter.js';
import { SATURN, saturnSystem, rotateSaturn, orbitSaturn } from './planets/saturn.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(120);
camera.position.setY(80);
camera.position.setX(-70);

renderer.render(scene, camera);

scene.add(SUN, earthSystem, mercurySystem, venusSystem, marsSystem, jupiterSystem, saturnSystem,);
earthSystem.add(EARTH);
venusSystem.add(VENUS);
mercurySystem.add(MERCURY);
marsSystem.add(MARS);
jupiterSystem.add(JUPITER);
saturnSystem.add(SATURN);

//positions
MERCURY.position.x = 50;
MERCURY.position.z = -50
VENUS.position.x = -100;
EARTH.position.x = 150;
//MARS.position.x = 200;
MARS.position.z = -200;
JUPITER.position.x = 350;
// SATURN.position.x = 450;
SATURN.position.z = -450;



scene.add(ambientLight);
scene.add(pointLight);

//adds grid to scene
//const gridHelper = new THREE.GridHelper(1000,250)
//scene.add(gridHelper);

//adds controls to move around the scene
const controls = new OrbitControls(camera, renderer.domElement);

const EARTHYEAR = (2 * Math.PI * (1 / 60) * (1 / 60)) / 2;
const EARTHDAY = (EARTHYEAR * 365);
function animate() {
  requestAnimationFrame(animate);
  rotateSun();
  //earth orbits the sun one cycle per minute
  orbitEarth(EARTHYEAR);
  rotateEarth(EARTHDAY);
  orbitMercury(EARTHYEAR);
  rotateMercury(EARTHYEAR);
  orbitVenus(EARTHYEAR / .615);
  rotateVenus(EARTHYEAR);
  rotateMars(EARTHDAY);
  orbitMars(EARTHYEAR);
  rotateJupiter(EARTHDAY);
  orbitJupiter(EARTHYEAR);
  orbitSaturn(EARTHYEAR);
  rotateSaturn(EARTHDAY);
  renderer.render(scene, camera);
}
animate()