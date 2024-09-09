import * as THREE from 'three'

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color:'#468585',emissive:'#1a1a1a'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry({width:2, height:0.1, depth:2});
const boxMaterial = new THREE.MeshBasicMaterial({color:'#b4b4b4', emissive:'#1a1a1a'});
const box = new THREE.Mesh(boxGeometry, boxMaterial)

box.position.y = -1.5;

scene.add(dodecahedron)
scene.add(box)

const light = new THREE.SpotLight({color:0x006769,intensity:100});
light.position.set({x:1,y:1,x:1})
scene.add(light)

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
