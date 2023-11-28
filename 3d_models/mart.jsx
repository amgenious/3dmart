import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import markscene from "../assets/glb_files/mart.glb"


export function Mart(){
    const mart = useGLTF(markscene)
    const markRef = useRef()
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width:500px)')
      setIsMobile(mediaQuery.matches)
      
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange);
  
      return() => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    },[])
    return(
        <mesh ref={markRef}>
            <primitive object={mart.scene} 
             scale={isMobile ? 0.25 : 0.6}
             position={isMobile ? [0,0,-2.2]: [0, 0, -1.5]}
            />
        </mesh>
    )

}