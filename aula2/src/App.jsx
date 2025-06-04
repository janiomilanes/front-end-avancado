import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import RenderizaBackOuFront from './components/RenderizaBackOuFront'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HookContador from './components/HookContador'
import HookMegaSena from './components/HookMegaSena'


const App = () => {
  return (
    <div>
      <RenderizandoComFuncoes/> 
      <RenderizaBackOuFront tecnologia="react" /> 
      <RenderizaBackOuFront tecnologia="java" /> 
      <h1>Exibindo imagens em react</h1>
      <TrabalhandoComImagens/>
      <HookContador/>
      <HookMegaSena/>
    </div>
  )
}

export default App