/*
return model Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public\\exe\\scene.gltf --debug
Author: Zero (https://sketchfab.com/rokkumanzero)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/megaman-x-dive-megamanexe-65f58288d8744bdd871e2d8d5e6ae201
Title: Megaman X Dive - Megaman.exe
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { AdjustEnemyHealth, CheckHitPos, enemyPos, playerPos } from '../Helpers'

export const PlayerEXE = (props) =>{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.glb')
  const { actions } = useAnimations(animations, group)
  const [name, setName] = useState('ch049_ui_debut_loop')

  const[hit, setHit] = useState(false)
  const [animPlayed, setAnimPlayed] = useState(false)
  const [animTimer, setAnimTimer] = useState(0)

  //Animation transisition
  useEffect(() => {
    actions[name].reset().fadeIn(0.5).play()
    
    return () => {
      actions[name].fadeOut(0.5)
    }
  }, [name])

  useFrame(() => {
    {animPlayed && setAnimTimer(animTimer + 1)}

    {animTimer > 70 && setAnimPlayed(false)}
    {animTimer > 70 && setAnimTimer(0)}
    {animTimer > 70 && setHit(false)}

    {animTimer > 50 && setName('ch049_ui_debut_loop')}

    //attack by mouse click
    onclick = () => {
      if(!animPlayed && animTimer===0){
        setAnimPlayed(true)
        setName('ch049_skill_01_stand_mid')
      }
      if(!hit){
        setHit(true)
        setTimeout(() => {
          for(let i = -2; i > -5; i--)
          {
            let hitAttempt = [playerPos[0], i]
            if(CheckHitPos(hitAttempt, enemyPos))
                AdjustEnemyHealth(-5)
          }}, 500)
      }
    }
      
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 3]} scale={0.6}>
          <group name="CH049_000_Ufbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint}  />
                  <group name="Object_6" position={[0, 0, -0.024]} />
                  <group name="Object_8" position={[0, 0, -0.024]} />
                  <group name="Object_10" position={[0, 0, -0.024]} />
                  <group name="Object_12" position={[0, 0, -0.024]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_13.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
