// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";

// import { Points, PointMaterial, Preload, Sphere } from "@react-three/drei";

// import * as random from "maath/random";

// const Stars = (props) => {
//   const ref = useRef();

//   const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;

import React from "react";

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] bg-black overflow-hidden">
      {/* Layer 1 of stars */}
      <div
        className="absolute inset-0 animate-twinkle"
        style={{
          boxShadow: `
            0 0 2px #f272c8, 
            20px 50px 2px #f272c8, 
            -30px -70px 2px #f272c8, 
            60px 90px 2px #f272c8, 
            -100px -200px 2px #f272c8,
            120px -150px 2px #f272c8, 
            180px 200px 2px #f272c8, 
            -220px 150px 2px #f272c8, 
            280px 300px 2px #f272c8, 
            -350px -400px 2px #f272c8`,
        }}
      ></div>

      {/* Layer 2 of stars for more density */}
      <div
        className="absolute inset-0 animate-twinkle delay-1000"
        style={{
          boxShadow: `
            10px 10px 2px #f272c8,
            -15px 40px 2px #f272c8,
            50px -20px 2px #f272c8,
            -70px -80px 2px #f272c8,
            100px 180px 2px #f272c8,
            -200px 230px 2px #f272c8,
            250px -300px 2px #f272c8`,
        }}
      ></div>
    </div>
  );
};

export default StarsCanvas;
