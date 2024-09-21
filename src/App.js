import { Center, Environment } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Button from "./Button"
import { Vector3 } from 'three'

function Rig(){
  const {camera, pointer} = useThree()
  const vec = new Vector3()

  useFrame(() => {
    vec.set(pointer.x, pointer.y, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
 

}

function App() {
  return (

  <Canvas shadows camera={{position:[0, 0, 5]}}>
   <Environment preset="forest" background />
   <Center>
   {[...Array(5).keys()].map((x) => (
    [...Array(3).keys()].map((y)=>(
        <Button key = {x + y * 5 } position = {[x*2.5, y * 2.5, 0]}/>
    ))
  
   ))}
   </Center>
   
   <Rig />
  </Canvas>

  )
  
}

export default App
