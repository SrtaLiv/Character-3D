import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import * as THREE from 'three';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 4], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
