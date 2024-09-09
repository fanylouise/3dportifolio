import * as THREE from 'three';
//createt a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');
//add a camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z =5;

//create and add a cube abject
const geometry = new THREE.DodecahedronGeometry(0.62);
const material = new THREE.MeshLambertMaterial({color:'#468585', emissive:'#468585', metalness:'0.6'})
const x = 0, y = 0;

const teste = new THREE.Shape();
teste.moveTo( x - 2, y + 2 );


const forma = new THREE.Mesh(geometry, material)
const cube = new THREE.Mesh(geometry,material);
const novo = new THREE.Mesh(geometry,material);
scene.add(cube);
scene.add(forma)
scene.add(novo)

//add lighting
const light = new THREE.DirectionalLight(0x9cdba6,10);
light.position.set(1,1,1);
scene.add(light);

//set upo the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
//animate the scene
function animate(){
  requestAnimationFrame(animate)

  cube.rotation.x += 0.02
  cube.rotation.y += 0.02

  forma.rotation.x += 0.01
  forma.rotation.y += 0.01

  novo.rotation.x += 0.01
  novo.rotation.y += 0.01
  renderer.render(scene,camera);
}
animate()