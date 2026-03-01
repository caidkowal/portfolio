"use client";

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Accept currentSection as prop
function Sphere({ currentSection }: { currentSection: string }) {

  //create a reference to start at 
  const SphereRef = useRef<THREE.Mesh>(null);
  
  // Load both textures
  const earthTexture = useTexture("./images/earth.jpg");
  const faceTexture = useTexture("./images/roll3.jpg"); // Add your face image
  
  // switch texture based on current section
  const currentTexture = currentSection === 'about' ? faceTexture : earthTexture;

  //update the frame overtime, this will run every frame
  useFrame( () => {
    if(SphereRef.current) 
    SphereRef.current.rotation.y  += 0.005;
  } )

  return(
    <mesh ref={SphereRef} rotation={[0, 0, 0.4]}>
      <sphereGeometry args={[2.5, 800, 800]} />
      <meshStandardMaterial
        map={currentTexture}  // Use the dynamic texture
        color="#ffffff"
        wireframe={true}
       />
    </mesh>
  )
}

// Accept and pass down currentSection prop
const App = ({ currentSection }: { currentSection: string }) => (
  <Canvas>
    <Sphere currentSection={currentSection} />
    <ambientLight intensity={3.0} />
    <pointLight position={[10, 10, 10]} />
  </Canvas>
)

export default App