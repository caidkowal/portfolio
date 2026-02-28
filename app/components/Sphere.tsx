"use client";

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'


function Sphere(){

  //create a reference to start at 
  const SphereRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/images/earth.jpg") // put image in /public folder

  //update the frame overtime, this will run every frame
  useFrame( () => {
    if(SphereRef.current) 
    SphereRef.current.rotation.y  += 0.01;
  } )

  return(
    <mesh ref={SphereRef} rotation={[0, 0, 0.4]}>
      <sphereGeometry args={[2, 300, 300]} />
      <meshStandardMaterial
        map={texture} 
        color="#ffffff"
        wireframe={true}
       />
    </mesh>
  )
}

const App = () => (
  <Canvas>
    <Sphere />
    <ambientLight intensity={3.0} />
    <pointLight position={[10, 10, 10]} />
  </Canvas>
)

export default App