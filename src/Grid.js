import { Plane, Text } from "@react-three/drei";

const XZPlane = ({ size }) => (
  <Plane
    args={[size/4, size/4, size, size]}
    rotation={[1.5 * Math.PI, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
  </Plane>
);

const XYPlane = ({ size }) => (
  <Plane
    args={[size/4, size/4,  size, size]}
    rotation={[0, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="pink" wireframe />
  </Plane>
);

const YZPlane = ({ size }) => (
  <Plane
    args={[size/4, size/4,  size, size]}
    rotation={[0, Math.PI / 2, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="rgba(255,255,255,0.1)" wireframe />
  </Plane>
);

export default function Grid({ size }) {
  return (
    <group>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[size / 2 + 1, 0, 0]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        X+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[-size / 2 - 1, 0, 0]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        X-
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, size / 2 + 1, 0]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        Y+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, -size / 2 - 1, 0]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        Y-
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, 0, size / 2 + 1]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        Z+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, 0, -size / 2 - 1]}
        // scale={[4, 4, 4]}
        fontSize={0.2}
      >
        Z-
      </Text>
      <XZPlane size={size} />
      <XYPlane size={size} />
      <YZPlane size={size} />

    </group>
  );
}
