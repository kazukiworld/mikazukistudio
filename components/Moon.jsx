import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import { useModelStore } from '@/lib/zustand/modelStore';

export function Moon({ ...props }) {
  const { setModelLoading, position, lightPosition, zoom } = useModelStore();
  const { size, viewport, camera } = useThree();
  const { nodes, materials } = useGLTF('/moon/moon.gltf');
  const modelGroup = useRef();
  const lightRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.0006);

  const { posAnim, lightPosAnim, zoomAnim} = useSpring({
    posAnim: [position[0] / viewport.width, position[1] / viewport.height, position[2]],
    lightPosAnim: lightPosition,
    zoomAnim: zoom,
    onStart: () => {
      setRotationSpeed(0.01); // Increase the rotation speed when the animation starts
    },
    onRest: () => {
      setRotationSpeed(0.0006); // Reset the rotation speed when the animation completes
    },
    config: { mass: 1, tension: 360, friction: 120},
  });

  useFrame(({ clock }) => {
    if (modelGroup.current) {
      modelGroup.current.rotation.y += rotationSpeed;
    }
    camera.zoom = zoomAnim.get();
    camera.updateProjectionMatrix();
  });

  useEffect(() => {
    if (nodes && materials) {
      setModelLoading(false);
    }

  }, [])

  return (
    <a.group {...props} dispose={null} position={posAnim} renderOrder={-1}>
      <a.directionalLight ref={lightRef} position={lightPosAnim} castShadow />
      <group ref={modelGroup} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="b964401c34154430bb1a8d7a5fa66a66fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere" rotation={[-1.26, 0.49, 0.96]} scale={size.width / 16}>
                  <mesh name="Sphere_Material001_0" geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
                  <mesh name="Sphere_Material001_0_1" geometry={nodes.Sphere_Material001_0_1.geometry} material={materials['Material.001']} />
                  <mesh name="Sphere_Material001_0_2" geometry={nodes.Sphere_Material001_0_2.geometry} material={materials['Material.001']} />
                  <mesh name="Sphere_Material001_0_3" geometry={nodes.Sphere_Material001_0_3.geometry} material={materials['Material.001']} />
                  <mesh name="Sphere_Material001_0_4" geometry={nodes.Sphere_Material001_0_4.geometry} material={materials['Material.001']} />
                </group>
                <group name="Camera" position={[528.6, 195.6, -369.36]} rotation={[3.12, -0.61, 2.84]} scale={100}>
                  <group name="Object_11" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload('/moon/moon.gltf');
