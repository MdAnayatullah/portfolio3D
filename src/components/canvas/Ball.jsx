// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   // Float,
//   // OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// // import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     // <Float speed={1.75} rotationaIntensity={1} floatIntensity={2}>
//     //   <ambientLight intensity={0.25} />
//     //   <directionalLight position={[0, 0, 0.05]} />
//     //   <mesh castShadow receiveShadow scale={2.75}>
//     //     <icosahedronGeometry args={[1, 1]} />
//     //     <meshStandardMaterial
//     //       color="#fff8eb"
//     //       polygonOffset
//     //       polygonOffsetFactor={-5}
//     //       flatShading
//     //     />
//     <>
//       <Decal
//         position={[0, 0, 1]}
//         //rotation={[2 * Math.PI, 0, 6.25]}
//         flatShadingt
//         map={decal}
//       />
//     </>
//     //   </mesh>
//     // </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     // <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
//     <Canvas>
//       {/* <Suspense fallback={<CanvasLoader />}> */}
//       {/* <Suspense> */}
//       {/* <OrbitControls enableZoom={false} /> */}
//       <Ball imgUrl={icon} />
//       {/* </Suspense> */}
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff8eb",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={icon}
        alt="icon"
        style={{
          width: "80%",
          height: "80%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default BallCanvas;
