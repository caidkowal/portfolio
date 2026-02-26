"use client";

import { Canvas } from '@react-three/fiber'

const Sphere = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshBasicMaterial color="#73AAF7" />
    </mesh>
  </Canvas>
)

export default Sphere