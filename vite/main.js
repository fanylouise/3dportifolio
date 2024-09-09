import * as THREE from 'three'

const canvas = document.getElementById({elementId:'canvas'});

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

const camera = new THREE.PerspectiveCamera({fov:75, aspect:window.innerWidth / window.innerHeight,near:0.1, far:1000});
camera.position.z = 5;

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color:'#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry({width:2, height:0.1, depth:2});
const boxMaterial = new THREE.MeshBasicMaterial({color:'#b4b4b4'});
const box = new THREE.Mesh(boxGeometry, boxMaterial)

box.position.y = -1.5;

scene.add(dodecahedron)
scene.add(box)

const light = new THREE.SpotLight({color:0x006769,intensity:100});
scene.add(light)

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
