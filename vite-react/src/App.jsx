import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, Sparkles} from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () =>{
  const meshRef = useRef();
  useFrame(()=>{
    if(meshRef.current){
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })
  return (
    
    <mesh ref={meshRef}>
      {/* eslint-disable react/forbid-component-props */}
      <sphereGeometry args={[1, 32, 32]} />
      {/* eslint-enable react/forbid-component-props */}
     <meshLambertMaterial color={0xFFD700} emissive={0xFFD700} reflectivity={0.001} refractionRatio={0.005} />
     <Sparkles count={15} scale={1} size={100} speed={0.2} noise={0.025} color={0xFFD700} />

    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{width: '100vw', height: '100vh', backgroundColor: '#1a1a1a'}}>
      <OrbitControls enableZoom={false} enablePan enableRotate={true}/>
      <directionalLight position={[1,1,1]} intensity={10} color={0x9cdba6}/>
      <color attach={"background"} args={["#f0f0f0"]} />
      <RotatingCube/>
    </Canvas>

  )
}
export default App;