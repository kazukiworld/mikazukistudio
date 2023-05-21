import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'

export function Moon({ position, lightPosition, zoom, ...props}) {
  const group = useRef();
  const lightRef = useRef();
  const { nodes, materials, animations } = useGLTF('/moon/moon.gltf');
  const { actions } = useAnimations(animations, group);
  const { size, viewport, camera } = useThree();
  const defaultPosition = position || [viewport.width / 2.6, viewport.height / 2.6, 0];
  const defaultLightPosition = lightPosition ||[-5, -3, 2];

  const { posAnim, lightPosAnim, zoomAnim } = useSpring({
    posAnim: defaultPosition,
    lightPosAnim: defaultLightPosition,
    zoomAnim: zoom,
    config: { mass: 1, tension: 280, friction: 120 }
  });

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y += 0.0004;
    }
    camera.zoom = zoomAnim.get();
    camera.updateProjectionMatrix();
  });


  return (
    <a.group ref={group} {...props} dispose={null} position={posAnim}>
      <a.directionalLight ref={lightRef} position={lightPosAnim} castShadow />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="b964401c34154430bb1a8d7a5fa66a66fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere" rotation={[-1.26, 0.49, 0.96]} scale={100}>
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
  )
}

useGLTF.preload('/moon/moon.gltf')

// import React, { useRef } from 'react'
// import { useGLTF, useAnimations} from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

// export function Moon(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('/moon/moon.gltf');
//   const { actions } = useAnimations(animations, group);

//     useFrame(({ clock }) => {
//       if (group.current) {
//         group.current.rotation.y += 0.001;
//       }
//     });
    
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//           <group name="b964401c34154430bb1a8d7a5fa66a66fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//             <group name="Object_2">
//               <group name="RootNode">
//                 <group name="Sphere" rotation={[-1.26, 0.49, 0.96]} scale={100}>
//                   <mesh name="Sphere_Material001_0" geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
//                   <mesh name="Sphere_Material001_0_1" geometry={nodes.Sphere_Material001_0_1.geometry} material={materials['Material.001']} />
//                   <mesh name="Sphere_Material001_0_2" geometry={nodes.Sphere_Material001_0_2.geometry} material={materials['Material.001']} />
//                   <mesh name="Sphere_Material001_0_3" geometry={nodes.Sphere_Material001_0_3.geometry} material={materials['Material.001']} />
//                   <mesh name="Sphere_Material001_0_4" geometry={nodes.Sphere_Material001_0_4.geometry} material={materials['Material.001']} />
//                 </group>
//                 <group name="Camera" position={[528.6, 195.6, -369.36]} rotation={[3.12, -0.61, 2.84]} scale={100}>
//                   <group name="Object_11" />
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/moon/moon.gltf')
