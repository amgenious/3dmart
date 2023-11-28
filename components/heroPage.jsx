"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Sky } from "@/3d_models/sky";
import Loader from "./loader";
import { Mart } from "@/3d_models/mart";
import { OrbitControls } from "@react-three/drei";

export default function HeroPage() {
  const [isRotating, setIsRotating] = useState(false);
  return (
    <section className="border h-screen">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <OrbitControls  enableZoom={false} 
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
          <Mart />
        </Suspense>
      </Canvas>
    </section>
  );
}
