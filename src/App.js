import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Box, OrbitControls, useTexture, Text } from "@react-three/drei";
import Grid from "./Grid";
import "./styles.css";


const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
  <group position={position} rotation={rotation} scale={scale}>
    <Box args={[1, 1, 1]} onClick={handleClick}>
      <meshStandardMaterial attach="material" color="white" />
    </Box>
  </group>
);

function Sphere({ position, rotation, scale = [1, 1, 1], handleClick,color }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>

    <mesh onClick={handleClick} >
      <sphereGeometry   args={[0.1, 2, 2]} />
      <meshPhysicalMaterial color={color}  />
    </mesh>

    </group>
  )
}

const Light = ({
  position,
  color,
  intensity,
  orbitalOffset = 0,
  orbitalSpeed = 1
}) => {
  const ref = useRef();
  // useFrame(() => {
  //   let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
  //   ref.current.position.set(
  //     Math.cos(date) * 2 + position[0],
  //     Math.sin(date) * 2 + position[1],
  //     Math.sin(date) * 2 + position[2]
  //   );
  // });

  return (
    <group position={position} ref={ref}>
  
      <pointLight color={color} intensity={intensity} 
      // decay={2}
       distance={20} />
    </group>
  );
};










export default function App() {


const [data,setdata]=useState([])



const CreateRandomNumber = ()=>{
  let point = Math.random()*(999-100)+100
  console.log(parseInt(point))
  return parseInt(point)
}



useEffect(()=>{

const createData =()=>{
  const points =[]
  for (let i = 0; i < 1000; i++) {
    points.push([CreateRandomNumber(),CreateRandomNumber(),CreateRandomNumber()])
    
  }
  setdata(points)
}
createData()

},[])

  return (
    <>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense
          fallback={
            <Text
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              Loading
            </Text>
          }
        >
          <OrbitControls />
          {/* <directionalLight intensity={1} position={[xPosition, yPosition, zPosition]} /> */}
          {/* <ambientLight  intensity={1} position={[xPosition, yPosition, zPosition]} /> */}
          <directionalLight color={"white"}  intensity={2} position={[100, 100, 100]} />
          <directionalLight color={"white"}  intensity={2} position={[-100, -100, -100]} />


          {/* <ambientLight intensity={0.1} /> */}
          <Grid size={100} />
          {/* <Light position={[3, 0, 2]} color="red" intensity={2} offset={200} /> */}
          {/* <Light position={[3, 0, 2]} color="white" intensity={12} offset={100} /> */}
          {/* <Light
            position={[9, 6, 3]}
            color="white"
            intensity={600}
            distance={1}
          /> */}

          {/* <Light
            position={[2, 2, -2]}
            color="blue"
            intensity={200}
            distance={10}
            orbitalSpeed={2}
          />
          <Light
            position={[-3, 0, 2]}
            color="green"
            intensity={200}
            orbitalSpeed={3}
          /> */}

          {/* <Cube
            handleClick={() => console.log("clicked on the cube")}
            rotation={[
              xRotation * Math.PI,
              yRotation * Math.PI,
              zRotation * Math.PI
            ]}
            position={[xPosition, yPosition, zPosition]}
            scale={[xScale, yScale, zScale]}
          /> */}



{
  data.length>0 &&data.map((e,i)=>{
   return(
      <React.Fragment key={i} >
  <Sphere
            handleClick={() => console.log(e )}
            color={"blue"}
            position={[(-e[0]/100), Math.abs((e[1]*1/100)), Math.abs((e[2]/100))]}
            // scale={[xScale/10, yScale/10, zScale/10]}
          />
      </React.Fragment>
    )
  })
}




        </Suspense>
      </Canvas>
    
    </>
  );
}
