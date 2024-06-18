import { Canvas } from "react-three-fiber";
import { Model } from "./Model";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

const Container = () => {
  return (
    <div className="w-full h-full">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Environment preset="studio" />
        <PerspectiveCamera
          makeDefault
          position={[2, 3.6, 3]}
          rotation={[-Math.PI / 4, 0, 0]} // Adjust rotation as needed
        />
        <OrbitControls enableZoom autoRotate />
        <Model className="Model" position={[0, 0.2, 0]} scale={0.1} />{" "}
        {/* Add className for identification */}
        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default Container;
