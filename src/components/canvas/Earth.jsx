// import React from "react";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("/planet/scene.gltf");
//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         position: [-4, 3, 6],
//         fov: 45,
//         near: 0.1,
//         far: 200,
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import React from "react";

const EarthCanvas = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <img
        src="/planet/system.jpg" // Replace with the path to your Earth image
        alt="Earth"
        className="w-[550px] h-[550px] object-cover rounded-full shadow-lg"
      />
    </div>
  );
};

export default EarthCanvas;
