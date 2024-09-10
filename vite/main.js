import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color:'#f3d2b7', emissive:'#f3d2b7'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterial = new THREE.MeshStandardMaterial({color:'#292f56', emissive:'#292f56'});
const box = new THREE.Mesh(boxGeometry, boxMaterial)

box.position.y = -1.5;

scene.add(dodecahedron)
scene.add(box)

const light = new THREE.SpotLight({color:0x006769,intensity:100});
light.position.set({x:1,y:1,x:1})
scene.add(light)

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.enableFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;

  box.rotation.y += 0.005

  controls.update()
  renderer.render(scene,camera);
}


window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
animate()